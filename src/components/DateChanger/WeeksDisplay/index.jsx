import React from 'react';
import moment from 'moment';

const WeeksDisplay = ({ appMoment }) => {
  const currentMoment = moment(appMoment);
  let weekStartDay = currentMoment
    .clone()
    .day(1)
    .format('D MMMM YYYY');
  let weekEndDay = currentMoment
    .clone()
    .add('1', 'weeks')
    .day(0)
    .format('D MMMM YYYY');
  return <div>{`${weekStartDay} - ${weekEndDay}`}</div>;
};

export default WeeksDisplay;
