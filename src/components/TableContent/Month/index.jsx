import React from 'react';
import { weekDays } from '../../../utils/weekDays';
import moment from 'moment';
import styles from './styles.module.scss';

const Month = ({ appMoment }) => {
  const currentMoment = moment(appMoment);
  const daysCount = currentMoment.daysInMonth();
  let counter = 1;
  const monthStartWeekday = currentMoment
    .clone()
    .date(1)
    .day();
  const calendarRowsCount = monthStartWeekday < 6 && monthStartWeekday !== 0 ? 5 : 6;
  let isMonthDaysMode = false;
  window.currentMoment = currentMoment;
  return (
    <>
      <thead>
        <tr>
          {Object.values(weekDays).map(cell => (
            <th className={styles['head-cell']} key={cell}>
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(calendarRowsCount)].map((row, index) => (
          <tr key={index}>
            {[...Array(7)].map((row, i) => {
              let returnValue;
              if (
                index === 0 &&
                (i === monthStartWeekday - 1 || (i === 6 && monthStartWeekday === 0))
              ) {
                isMonthDaysMode = true;
              }
              if (isMonthDaysMode) {
                returnValue = (
                  <td className={styles.cell} key={i}>
                    <span className={styles.day}>{counter}</span>
                  </td>
                );
                counter += 1;
              } else {
                returnValue = <td className={styles.cell} key={i}></td>;
              }
              if (counter > daysCount) {
                isMonthDaysMode = false;
              }
              return returnValue;
            })}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Month;
