import React from 'react';
import moment from 'moment';
import styles from './styles.module.scss';
import { setMoment } from '../../../features/calendar';
import { useDispatch } from 'react-redux';
import ResetMomentButton from '../../ResetButton';

const MonthMenu = ({ appMoment }) => {
  const currentMoment = moment(appMoment);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <ResetMomentButton />
      <div className={styles.months}>
        {[...Array(12)].map((item, index) => {
          currentMoment.month(index);
          const timeStamp = currentMoment.format();
          return (
            <div
              className={styles.month}
              key={index}
              onClick={() => dispatch(setMoment(timeStamp))}
            >
              {currentMoment.format('MMMM')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthMenu;
