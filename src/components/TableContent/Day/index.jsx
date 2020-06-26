import React from 'react';
import styles from './styles.module.scss';
import { dayPeriods } from '../../../utils/dayPeriods';

const Day = ({ appMoment }) => {
  return (
    <tbody className={styles.tbody}>
      {Object.values(dayPeriods).map(cell => (
        <tr className={styles.row} key={cell}>
          <td className={styles['title-cell']} key={cell}>
            {cell}
          </td>
          <td className={styles['events-cell']}></td>
        </tr>
      ))}
    </tbody>
  );
};

export default Day;
