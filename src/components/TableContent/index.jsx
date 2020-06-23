import React from 'react';
import { useSelector } from 'react-redux';
import Week from './Week';
import Month from './Month';
import Day from './Day';
import { modes } from '../../utils/modes';

const TableContent = () => {
  const { mode, appMoment } = useSelector(state => ({
    mode: state.calendar.mode,
    appMoment: state.calendar.appMoment,
  }));
  const Component = mode === modes.first ? Month : mode === modes.second ? Week : Day;
  return <Component appMoment={appMoment} />;
};

export default TableContent;
