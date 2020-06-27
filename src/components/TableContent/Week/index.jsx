import React from 'react';
import PropTypes from 'prop-types';
import { weekDays } from '../../../utils/weekDays';
import moment from 'moment';
import styles from './styles.module.scss';

const Week = ({ appMoment }) => {
  const currentMoment = moment(appMoment);
  let weekStartDay = currentMoment.date(currentMoment.startOf('isoWeek').date());

  return (
    <>
      <thead>
        <tr>
          {Object.values(weekDays.full).map(cell => (
            <th className={styles['head-cell']} key={cell}>
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {[...Array(7)].map((item, index) => {
            const td = (
              <td className={styles.cell} key={index}>
                <span className={styles.day}>{weekStartDay.date()}</span>
              </td>
            );
            weekStartDay.add('1', 'days');
            return td;
          })}
        </tr>
      </tbody>
    </>
  );
};

Week.propTypes = {
  appMoment: PropTypes.string,
};

export default Week;
