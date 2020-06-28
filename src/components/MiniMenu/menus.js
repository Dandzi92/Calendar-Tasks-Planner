import MonthMenu from './MonthMenu';
import WeekMenu from './WeekMenu';
import DayMenu from './DayMenu';
import { modes } from '../../utils/modes';

export const menuComponents = {
  [modes.MONTH]: {
    id: 0,
    component: MonthMenu,
    name: 'MonthMenu',
  },
  [modes.WEEK]: {
    id: 1,
    component: WeekMenu,
    name: 'WeekMenu',
  },
  [modes.DAY]: {
    id: 2,
    component: DayMenu,
    name: 'DayMenu',
  },
};
