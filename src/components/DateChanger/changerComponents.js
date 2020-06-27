import { modes } from '../../utils/modes';
import MonthsDisplay from './MonthsDisplay';
import WeeksDisplay from './WeeksDisplay';
import DaysDisplay from './DaysDisplay';

export const changerComponents = {
  [modes.MONTH]: {
    id: 0,
    component: MonthsDisplay,
    name: 'MonthsDisplay',
    amount: 'months',
  },
  [modes.WEEK]: {
    id: 1,
    component: WeeksDisplay,
    name: 'WeeksDisplay',
    amount: 'weeks',
  },
  [modes.DAY]: {
    id: 2,
    component: DaysDisplay,
    name: 'DaysDisplay',
    amount: 'days',
  },
};
