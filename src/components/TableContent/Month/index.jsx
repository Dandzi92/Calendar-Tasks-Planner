import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { weekDays } from '../../../utils/weekDays';
import moment from 'moment';
import styles from './styles.module.scss';
import CellContainer from '../../CellContainer';

const Month = ({ appMoment, menuMode, handler }) => {
  const currentMoment = moment(appMoment);
  window.moment = currentMoment;
  const daysCount = currentMoment.daysInMonth();
  const monthStartWeekday = currentMoment
    .clone()
    .date(1)
    .day();

  const counter = currentMoment.clone().date(1);

  const daysAmountUnshift = monthStartWeekday === 0 ? 6 : monthStartWeekday - 1;
  const calendarRowsCount = Math.ceil((daysCount + daysAmountUnshift) / 7);
  let isMonthDaysMode = false;
  const dayNames = menuMode ? { ...weekDays.mini } : { ...weekDays.full };
  return (
    <>
      <thead>
        <tr>
          {Object.values(dayNames).map(cell => (
            <th
              className={classnames(styles['head-cell'], {
                [styles.menu]: menuMode,
              })}
              key={cell}
            >
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(calendarRowsCount)].map((row, index) => (
          <tr key={index}>
            {[...Array(7)].map((row, i) => {
              if (
                index === 0 &&
                (i === monthStartWeekday - 1 || (i === 6 && monthStartWeekday === 0))
              ) {
                isMonthDaysMode = true;
              }
              const timeStamp = counter.format();

              const returnComponent = (
                <CellContainer
                  isMonthDaysMode={isMonthDaysMode}
                  counter={isMonthDaysMode ? counter.date() : ''}
                  key={`${i}-${index}-${counter.month()}-${counter.year()}`}
                  menuHandler={() => handler(timeStamp)}
                  menuMode={menuMode}
                  timeStamp={timeStamp}
                />
              );
              isMonthDaysMode && counter.add('1', 'days');
              if (counter.month() !== currentMoment.month()) {
                isMonthDaysMode = false;
              }
              return returnComponent;
            })}
          </tr>
        ))}
      </tbody>
    </>
  );
};

Month.propTypes = {
  appMoment: PropTypes.string,
};

export default Month;
