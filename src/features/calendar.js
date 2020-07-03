import { takeEvery, put } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { assocPath, pathOr } from 'ramda';
import moment from 'moment';

export const calendarFeature = createSlice({
  name: 'calendar',
  initialState: {
    events: {},
    errors: [],
    appMoment: moment().format(),
    loading: false,
    mode: 'month',
  },
  reducers: {
    addMoment: (state, { payload }) => {
      const currentMoment = moment(state.appMoment);
      currentMoment.add('1', `${payload}`);
      state.appMoment = currentMoment.format();
    },
    subtractMoment: (state, { payload }) => {
      const currentMoment = moment(state.appMoment);
      currentMoment.subtract('1', `${payload}`);
      state.appMoment = currentMoment.format();
    },
    setMoment: (state, { payload }) => {
      const currentMoment = moment(payload);
      state.appMoment = currentMoment.format();
    },
    changeMode: (state, { payload }) => {
      state.mode = payload;
    },
    resetToNow: state => {
      state.appMoment = moment().format();
    },
    addEvent: (state, { payload }) => {
      const eventMomentStart = moment(payload.eventBegin);
      const eventsObject = { ...state.events };
      const events = pathOr(
        [],
        [
          eventMomentStart.format('Y'),
          eventMomentStart.format('MMMM'),
          eventMomentStart.format('D'),
          eventMomentStart.format('H'),
        ],
        eventsObject
      );
      events.push({ ...payload });
      state.events = assocPath(
        [
          eventMomentStart.format('Y'),
          eventMomentStart.format('MMMM'),
          eventMomentStart.format('D'),
          eventMomentStart.format('H'),
        ],
        events,
        eventsObject
      );
    },
  },
});

export const {
  addMoment,
  subtractMoment,
  changeMode,
  setMoment,
  resetToNow,
  addEvent,
} = calendarFeature.actions;
export default calendarFeature.reducer;

// function* fetchcalendarWorker() {
//   try {
//     yield put(fetchcalendarSuccess());
//   } catch (e) {
//     yield put(fetchcalendarFail(e.message));
//   }
// }

// export function* calendarSaga() {
//   yield takeEvery(fetchcalendarRequest().type, fetchcalendarWorker);
// }
