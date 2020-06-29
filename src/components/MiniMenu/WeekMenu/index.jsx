import React from 'react';
import moment from 'moment';
import styles from './styles.module.scss';
import { setMoment } from '../../../features/calendar';
import { useDispatch } from 'react-redux';
import ResetMomentButton from '../../ResetButton';

const WeekMenu = ({ appMoment }) => {
  window.moment = moment();
  const currentMoment = moment(appMoment);
  const dispatch = useDispatch();
  const monthBeginTime = currentMoment
    .clone()
    .startOf('month')
    .startOf('isoWeek');

  const monthEndTime = currentMoment
    .clone()
    .endOf('month')
    .endOf('isoWeek');

  const weeksAmount = Math.ceil(monthEndTime.diff(monthBeginTime, 'days') / 7);
  const beginPeriodweeksDiff = Math.floor(currentMoment.diff(monthBeginTime, 'days') / 7);
  currentMoment.subtract(beginPeriodweeksDiff, 'weeks');

  const setWeek = moment => {
    dispatch(setMoment(moment));
  };
  return (
    <div className={styles.container}>
      <ResetMomentButton />
      <div>
        {[...Array(weeksAmount)].map((item, index) => {
          const weekStartDay = currentMoment
            .clone()
            .startOf('isoWeek')
            .format('D MMMM YYYY');
          const weekEndDay = currentMoment
            .clone()
            .endOf('isoWeek')
            .format('D MMMM YYYY');
          const timeStamp = currentMoment.format();
          const returnedWeek = (
            <div
              onClick={() => setWeek(timeStamp)}
              className={styles.week}
              key={index}
            >{`${weekStartDay} - ${weekEndDay}`}</div>
          );
          currentMoment.add('1', 'weeks');
          return returnedWeek;
        })}
      </div>
    </div>
  );
};

export default WeekMenu;
