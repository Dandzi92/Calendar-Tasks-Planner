import { takeEvery, put } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const calendarFeature = createSlice({
  name: 'calendar',
  initialState: {
    events: [],
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
  },
});

export const { addMoment, subtractMoment } = calendarFeature.actions;
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
