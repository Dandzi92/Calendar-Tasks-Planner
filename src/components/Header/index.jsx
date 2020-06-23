import React from 'react';
import styles from './styles.module.scss';
import ModeButton from '../ModeButton';
import ArrowButton from '../ArrowButton';
import AddEventsButton from '../AddEventsButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.modes}>
        <ModeButton title={'Month'} />
        <ModeButton title={'Week'} />
        <ModeButton title={'Day'} />
      </div>
      <div className={styles['date-changer']}>
        <ArrowButton />
        <span>November 2019</span>
        <ArrowButton order={'right'} />
      </div>
      <AddEventsButton />
    </header>
  );
};

export default Header;
