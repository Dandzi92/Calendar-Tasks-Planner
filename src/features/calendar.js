import { takeEvery, put, select } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { assocPath, pathOr } from 'ramda';
import moment from 'moment';
import { getEvents } from '../utils/selectors';

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
    addEventRequest: () => {},
    addEvent: (state, { payload }) => {
      const newEventStart = moment(payload.eventBegin);
      const eventsObject = { ...state.events };
      const events = pathOr(
        [],
        [
          newEventStart.format('Y'),
          newEventStart.format('MMMM'),
          newEventStart.format('D'),
          newEventStart.format('H'),
        ],
        eventsObject
      );
      events.push({ ...payload });
      state.events = assocPath(
        [
          newEventStart.format('Y'),
          newEventStart.format('MMMM'),
          newEventStart.format('D'),
          newEventStart.format('H'),
        ],
        events,
        eventsObject
      );
    },
    addEventFail: (state, { payload }) => {
      console.log('Crossing ERROR', payload);
      state.errors.push(payload);
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
  addEventRequest,
  addEventFail,
} = calendarFeature.actions;
export default calendarFeature.reducer;

function* eventCreationWorker({ payload }) {
  try {
    const { events } = yield select(state => ({
      events: getEvents(state),
    }));
    const newEventStart = moment(payload.eventBegin);
    const newEventEnd = moment(payload.eventEnd);
    const eventCreationDay = pathOr(
      {},
      [newEventStart.format('Y'), newEventStart.format('MMMM'), newEventStart.format('D')],
      events
    );
    Object.values(eventCreationDay).forEach(hourEvents => {
      hourEvents.forEach(event => {
        const eventToCheckStart = moment(event.eventBegin);
        const eventToCheckEnd = moment(event.eventEnd);
        if (
          (newEventStart.diff(eventToCheckStart) >= 0 &&
            newEventStart.diff(eventToCheckEnd) <= 0) ||
          (newEventEnd.diff(eventToCheckStart) >= 0 && newEventEnd.diff(eventToCheckEnd) <= 0)
        ) {
          throw new Error('Events are crossing');
        }
      });
    });
    yield put(addEvent(payload));
  } catch (e) {
    yield put(addEventFail(e.message));
  }
}

export function* calendarSaga() {
  yield takeEvery(addEventRequest().type, eventCreationWorker);
}
