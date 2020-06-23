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
    fetchcalendarRequest: state => {
      state.loading = true;
    },
    fetchcalendarFail: (state, action) => {
      state.loading = false;
      state.errors.push(action.payload);
    },
    fetchcalendarSuccess: (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.calendar = action.payload;
      }
    },
  },
});

export const {
  fetchcalendarRequest,
  fetchcalendarSuccess,
  fetchcalendarFail,
} = calendarFeature.actions;
export default calendarFeature.reducer;

function* fetchcalendarWorker() {
  try {
    yield put(fetchcalendarSuccess());
  } catch (e) {
    yield put(fetchcalendarFail(e.message));
  }
}

export function* calendarSaga() {
  yield takeEvery(fetchcalendarRequest().type, fetchcalendarWorker);
}
