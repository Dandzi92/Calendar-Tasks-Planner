import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './styles.module.scss';
import MonthsDisplay from '../../DateChanger/MonthsDisplay';
import Month from '../../TableContent/Month';
import ArrowButton from '../../ArrowButton';
import { setMoment } from '../../../features/calendar';
import { useDispatch } from 'react-redux';

const DayMenu = ({ appMoment }) => {
  const [localMoment, setLocalMoment] = useState(appMoment);
  useEffect(() => {
    setLocalMoment(appMoment);
  }, [appMoment]);

  const dispatch = useDispatch();

  const monthChange = change => {
    const currentMoment = moment(localMoment);
    setLocalMoment(currentMoment[change]('1', 'months').format());
  };

  const setDayMoment = moment => {
    dispatch(setMoment(moment));
  };

  return (
    <div className={styles.container}>
      <div className={styles.changer}>
        <ArrowButton handler={() => monthChange('subtract')} />
        <MonthsDisplay menuMode appMoment={localMoment} />
        <ArrowButton handler={() => monthChange('add')} order={'right'} />
      </div>
      <table>
        <Month menuMode appMoment={localMoment} handler={setDayMoment} />
      </table>
    </div>
  );
};

export default DayMenu;
