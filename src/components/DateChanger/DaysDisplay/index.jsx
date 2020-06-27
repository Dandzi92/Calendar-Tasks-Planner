import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles.module.scss';

const DaysDisplay = ({ appMoment, handler }) => {
  const currentMoment = moment(appMoment);
  return (
    <div className={styles.title} onClick={handler}>
      {currentMoment.format('D MMMM YYYY')}
    </div>
  );
};

DaysDisplay.propTypes = {
  appMoment: PropTypes.string,
  handler: PropTypes.func,
};

export default DaysDisplay;
