import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { pathOr } from 'ramda';
import styles from './styles.module.scss';
import { dayPeriods } from '../../../utils/dayPeriods';
import { useSelector } from 'react-redux';
import { getEvents } from '../../../utils/selectors';

const Day = ({ appMoment }) => {
  const eventsCollection = useSelector(state => getEvents(state));
  const currentMoment = moment(appMoment);
  const currentDayEvents = pathOr(
    {},
    [currentMoment.format('Y'), currentMoment.format('MMMM'), currentMoment.format('D')],
    eventsCollection
  );

  const daysToRender = Object.entries(currentDayEvents).map(([time, timeEvents], index) => {
    return timeEvents.map((item, i) => {
      return (
        <div
          style={{
            top: `${time * (100 / 24) + (100 / 24) * (moment(item.eventBegin).format('m') / 60)}%`,
          }}
          className={styles.event}
          key={`${i}-${index}-${appMoment}`}
        >
          <span>{item.name}</span>
          <span>{`${moment(item.eventBegin).format('HH-mm')}:${moment(item.eventEnd).format(
            'HH-mm'
          )}`}</span>
        </div>
      );
    });
  });

  return (
    <tbody className={styles.tbody}>
      <tr>
        <td className={styles.times}>
          <table>
            <tbody>
              {Object.values(dayPeriods).map(cell => (
                <tr className={styles.row} key={cell}>
                  <td className={styles['title-cell']} key={cell}>
                    {cell}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
        <td className={styles.events}>
          {daysToRender}
          <table>
            <tbody>
              {Object.values(dayPeriods).map(cell => (
                <tr className={styles.row} key={cell}>
                  <td className={styles['events-cell']}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  );
};

Day.propTypes = {
  appMoment: PropTypes.string,
};

export default Day;
