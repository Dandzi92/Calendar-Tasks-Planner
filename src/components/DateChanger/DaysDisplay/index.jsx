import React from 'react';
import moment from 'moment';

const DaysDisplay = ({ appMoment }) => {
  const currentMoment = moment(appMoment);

  return <div>{currentMoment.format('D MMMM YYYY')}</div>;
};

export default DaysDisplay;
