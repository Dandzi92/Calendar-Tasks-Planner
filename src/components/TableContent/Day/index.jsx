import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { dayPeriods } from '../../../utils/dayPeriods';

const Day = ({ appMoment }) => {
  return (
    <tbody className={styles.tbody}>
      <tr>
        <td className={styles.times}>
          <table>
            <tbody>
              {Object.values(dayPeriods).map(cell => (
                <tr className={styles.row} key={cell}>
                  <td className={styles['title-cell']} key={cell}>
                    {cell}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
        <td className={styles.events}>
          <table>
            <tbody>
              {Object.values(dayPeriods).map(cell => (
                <tr className={styles.row} key={cell}>
                  <td className={styles['events-cell']}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  );
};

Day.propTypes = {
  appMoment: PropTypes.string,
};

export default Day;
