import React from 'react';
import styles from './styles.module.scss';
import ModeButton from '../ModeButton';
import AddEventsButton from '../AddEventsButton';
import DateChanger from '../DateChanger';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.modes}>
        <ModeButton title={'Month'} />
        <ModeButton title={'Week'} />
        <ModeButton title={'Day'} />
      </div>
      <DateChanger />
      <AddEventsButton />
    </header>
  );
};

export default Header;
