import React from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { menuComponents } from './menus';

const MiniMenu = () => {
  const { mode, appMoment } = useSelector(state => ({
    mode: state.calendar.mode,
    appMoment: state.calendar.appMoment,
  }));
  const Component = menuComponents[mode].component;
  return (
    <div className={styles.container}>
      <Component appMoment={appMoment} />
    </div>
  );
};

export default MiniMenu;
