import React from 'react';
import PropTypes from 'prop-types';
import { weekDays } from '../../../utils/weekDays';
import moment from 'moment';
import styles from './styles.module.scss';
import CellContainer from '../../CellContainer';

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
            const timeStamp = weekStartDay.format();
            const returnComponent = (
              <CellContainer
                key={`${index}-${weekStartDay.isoWeek()}-${weekStartDay.year()}`}
                isWeek
                counter={weekStartDay.date()}
                menuHandler={() => {}}
                timeStamp={timeStamp}
              />
            );
            weekStartDay.add('1', 'days');
            return returnComponent;
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
