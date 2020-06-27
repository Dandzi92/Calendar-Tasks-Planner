import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowButton from '../ArrowButton';
import styles from './styles.module.scss';
import { subtractMoment, addMoment } from '../../features/calendar';
import MiniMenu from '../MiniMenu';
import { changerComponents } from './changerComponents';

const DateChanger = () => {
  const { mode, appMoment } = useSelector(state => ({
    mode: state.calendar.mode,
    appMoment: state.calendar.appMoment,
  }));
  const dispatch = useDispatch();
  const [isChoiceMenuOpened, toggleChoiceMenu] = useState(false);
  const momentAmountToChange = changerComponents[mode].amount;
  const Component = changerComponents[mode].component;
  return (
    <div className={styles['date-changer']}>
      <ArrowButton handler={() => dispatch(subtractMoment(momentAmountToChange))} />
      <Component handler={() => toggleChoiceMenu(!isChoiceMenuOpened)} appMoment={appMoment} />
      {isChoiceMenuOpened && <MiniMenu />}
      <ArrowButton order={'right'} handler={() => dispatch(addMoment(momentAmountToChange))} />
    </div>
  );
};

export default DateChanger;
