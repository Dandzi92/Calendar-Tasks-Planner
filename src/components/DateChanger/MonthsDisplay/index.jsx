import React from 'react';
import moment from 'moment';

const MonthsDisplay = ({ appMoment }) => {
  const currentMoment = moment(appMoment);
  return <div>{currentMoment.format('MMMM YYYY')}</div>;
};

export default MonthsDisplay;
