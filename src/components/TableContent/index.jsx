import React from 'react';
import { useSelector } from 'react-redux';
import { modeContents } from './modeComponents';

const TableContent = () => {
  const { mode, appMoment } = useSelector(state => ({
    mode: state.calendar.mode,
    appMoment: state.calendar.appMoment,
  }));
  const Component = modeContents[mode].component;
  return <Component appMoment={appMoment} />;
};

export default TableContent;
