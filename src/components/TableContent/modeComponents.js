import { modes } from '../../utils/modes';
import Month from './Month';
import Week from './Week';
import Day from './Day';

export const modeContents = {
  [modes.MONTH]: {
    id: 0,
    component: Month,
    name: 'Month',
  },
  [modes.WEEK]: {
    id: 1,
    component: Week,
    name: 'Week',
  },
  [modes.DAY]: {
    id: 2,
    component: Day,
    name: 'Day',
  },
};
