import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import { pathOr, isEmpty } from 'ramda';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getEvents } from '../../utils/selectors';

const CellContainer = ({ menuMode, counter, isMonthDaysMode, menuHandler, isWeek, timeStamp }) => {
  const eventsCollection = useSelector(state => getEvents(state));
  const currentMoment = moment(timeStamp);
  const currentDayEvents = pathOr(
    {},
    [currentMoment.format('Y'), currentMoment.format('MMMM'), currentMoment.format('D')],
    eventsCollection
  );
  const flattenEvents = Object.values(currentDayEvents).reduce(
    (acc, hour) => [...acc, ...hour],
    []
  );
  const overflowContainerRef = useRef();
  const [eventsToRender, setRenderItems] = useState();
  const [isOverflowed, toggleIsOverflowed] = useState(false);
  const [itemsNotRendered, setNotRenderedItems] = useState();

  useEffect(() => {
    if (isEmpty(currentDayEvents) || menuMode || isWeek) return;
    let overallHeight = 0;
    let eventsElements = Array.from(overflowContainerRef.current.children);
    let eventsElementsOverflowed = [];
    if (overflowContainerRef.current.scrollHeight > overflowContainerRef.current.clientHeight) {
      eventsElementsOverflowed = eventsElements.reduce((acc, item) => {
        overallHeight += item.clientHeight;
        if (overallHeight > overflowContainerRef.current.clientHeight) {
          return [...acc, item];
        }
        return acc;
      }, []);
    }
    if (eventsElementsOverflowed.length) {
      toggleIsOverflowed(true);
      setRenderItems(eventsElements.length - eventsElementsOverflowed.length);
      setNotRenderedItems(eventsElementsOverflowed.length);
    }
  }, [currentDayEvents, menuMode, isWeek]);

  const element = <span className={styles['not-rendered']}>{`+ ${itemsNotRendered} more`}</span>;

  return (
    <td
      className={classnames(styles['cell'], {
        [styles.menu]: menuMode,
        [styles.week]: isWeek,
      })}
      {...(menuMode && isMonthDaysMode && { onClick: menuHandler })}
    >
      <span className={styles.day}>{counter}</span>

      <div className={styles.container} ref={overflowContainerRef}>
        {!menuMode &&
          flattenEvents.slice(0, eventsToRender).map((item, index) => {
            return (
              <div className={styles.event} key={`${index}${item.name}`}>
                <span>{item.name}</span>
                <span>{`${moment(item.eventBegin).format('HH-mm')}:${moment(item.eventEnd).format(
                  'HH-mm'
                )}`}</span>
              </div>
            );
          })}
      </div>
      {isOverflowed && element}
    </td>
  );
};

CellContainer.defaultProps = {
  menuMode: false,
  isMonthDaysMode: false,
  isWeek: false,
};

CellContainer.propTypes = {
  menuMode: PropTypes.bool,
  isMonthDaysMode: PropTypes.bool,
  isWeek: PropTypes.bool,
  counter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menuHandler: PropTypes.func,
};

export default CellContainer;
