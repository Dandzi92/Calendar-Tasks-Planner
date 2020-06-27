import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const WeeksDisplay = ({ appMoment, handler }) => {
  const currentMoment = moment(appMoment);
  let weekStartDay = currentMoment.startOf('isoWeek').format('D MMMM YYYY');
  let weekEndDay = currentMoment.endOf('isoWeek').format('D MMMM YYYY');
  return <div className={styles.title} onClick={handler}>{`${weekStartDay} - ${weekEndDay}`}</div>;
};

WeeksDisplay.propTypes = {
  appMoment: PropTypes.string,
  handler: PropTypes.func,
};

export default WeeksDisplay;
