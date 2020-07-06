import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const CellContainer = ({ menuMode, counter, isMonthDaysMode, menuHandler }) => {
  return (
    <td
      className={classnames(styles['cell'], {
        [styles.menu]: menuMode,
      })}
      {...(menuMode && isMonthDaysMode && { onClick: menuHandler })}
    >
      <span className={styles.day}>{counter}</span>
    </td>
  );
};

export default CellContainer;
