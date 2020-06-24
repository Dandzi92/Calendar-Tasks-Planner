import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowButton from '../ArrowButton';
import { modes } from '../../utils/modes';
import styles from './styles.module.scss';
import MonthsDisplay from './MonthsDisplay';
import WeeksDisplay from './WeeksDisplay';
import DaysDisplay from './DaysDisplay';
import { subtractMoment, addMoment } from '../../features/calendar';

const DateChanger = () => {
  const { mode, appMoment } = useSelector(state => ({
    mode: state.calendar.mode,
    appMoment: state.calendar.appMoment,
  }));
  const dispatch = useDispatch();
  const momentAmountToChange =
    mode === modes.first ? 'months' : mode === modes.second ? 'weeks' : 'days';
  const Component =
    mode === modes.first ? MonthsDisplay : mode === modes.second ? WeeksDisplay : DaysDisplay;
  return (
    <div className={styles['date-changer']}>
      <ArrowButton handler={() => dispatch(subtractMoment(momentAmountToChange))} />
      <Component appMoment={appMoment} />
      <ArrowButton order={'right'} handler={() => dispatch(addMoment(momentAmountToChange))} />
    </div>
  );
};

export default DateChanger;
