import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import TableContent from '../TableContent';
import { useSelector } from 'react-redux';

const Main = () => {
  const mode = useSelector(state => state.calendar.mode);
  return (
    <table className={classnames(styles.table, { [styles['day-mode']]: mode === 'day' })}>
      <TableContent />
    </table>
  );
};

export default Main;
