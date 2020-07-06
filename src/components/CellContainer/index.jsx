import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import { pathOr } from 'ramda';
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

  return (
    <td
      className={classnames(styles['cell'], {
        [styles.menu]: menuMode,
        [styles.week]: isWeek,
      })}
      {...(menuMode && isMonthDaysMode && { onClick: menuHandler })}
    >
      <div className={styles.container}>
        <span className={styles.day}>{counter}</span>
        {flattenEvents.map(
          (item, index) =>
            !menuMode && (
              <div className={styles.event} key={`${index}${item.name}`}>
                <span>{item.name}</span>
                <span>{`${moment(item.eventBegin).format('HH-mm')}:${moment(item.eventEnd).format(
                  'HH-mm'
                )}`}</span>
              </div>
            )
        )}
      </div>
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
