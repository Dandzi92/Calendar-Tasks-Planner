import React from 'react';
import styles from './styles.module.scss';
import TableContent from '../TableContent';

const Main = () => {
  return (
    <table className={styles.table}>
      <TableContent />
    </table>
  );
};

export default Main;
