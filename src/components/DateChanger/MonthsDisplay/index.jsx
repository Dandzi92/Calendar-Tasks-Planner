import React from 'react';
import moment from 'moment';

const MonthsDisplay = ({ appMoment }) => {
  const currentMoment = moment(appMoment);
  window.moment = currentMoment;
  return <div>{currentMoment.format('MMMM YYYY')}</div>;
};

export default MonthsDisplay;
