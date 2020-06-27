import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MonthsDisplay = ({ appMoment, handler }) => {
  const currentMoment = moment(appMoment);
  return (
    <div className={styles.title} onClick={handler}>
      {currentMoment.format('MMMM YYYY')}
    </div>
  );
};

MonthsDisplay.propTypes = {
  appMoment: PropTypes.string,
  handler: PropTypes.func,
};

export default MonthsDisplay;
