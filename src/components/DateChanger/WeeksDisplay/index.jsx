import React from 'react';
import moment from 'moment';

const WeeksDisplay = ({ appMoment }) => {
  const currentMoment = moment(appMoment);
  let weekStartDay = currentMoment.startOf('isoWeek').format('D MMMM YYYY');
  let weekEndDay = currentMoment.endOf('isoWeek').format('D MMMM YYYY');
  return <div>{`${weekStartDay} - ${weekEndDay}`}</div>;
};

export default WeeksDisplay;
