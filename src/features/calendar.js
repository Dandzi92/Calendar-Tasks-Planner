import { takeEvery, put, select } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { assocPath, pathOr } from 'ramda';
import moment from 'moment';
import { getEvents } from '../utils/selectors';

export const calendarFeature = createSlice({
  name: 'calendar',
  initialState: {
    events: {
      '2020': {
        July: {
          '6': {
            '0': [
              {
                eventBegin: '2020-07-06T00:02:00+03:00',
                eventEnd: '2020-07-06T00:03:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '8': [
              {
                eventBegin: '2020-07-06T08:05:00+03:00',
                eventEnd: '2020-07-06T09:41:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '10': [
              {
                eventBegin: '2020-07-06T10:40:00+03:00',
                eventEnd: '2020-07-06T11:40:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '11': [
              {
                eventBegin: '2020-07-06T11:41:00+03:00',
                eventEnd: '2020-07-06T12:41:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '19': [
              {
                eventBegin: '2020-07-06T19:42:00+03:00',
                eventEnd: '2020-07-06T20:42:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '20': [
              {
                eventBegin: '2020-07-06T20:43:00+03:00',
                eventEnd: '2020-07-06T21:42:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
          },
          10: {
            '8': [
              {
                eventBegin: '2020-07-06T08:41:00+03:00',
                eventEnd: '2020-07-06T09:41:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '10': [
              {
                eventBegin: '2020-07-06T10:40:00+03:00',
                eventEnd: '2020-07-06T11:40:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '11': [
              {
                eventBegin: '2020-07-06T11:41:00+03:00',
                eventEnd: '2020-07-06T12:41:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '19': [
              {
                eventBegin: '2020-07-06T19:42:00+03:00',
                eventEnd: '2020-07-06T20:42:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
            '20': [
              {
                eventBegin: '2020-07-06T20:43:00+03:00',
                eventEnd: '2020-07-06T21:42:00+03:00',
                name: 'hjkhk',
                description: 'gfhhhfhfhfghfghfghfhfgfhg',
              },
            ],
          },
        },
      },
    },
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
    const eventCreationDay = pathOr(
      {},
      [newEventStart.format('Y'), newEventStart.format('MMMM'), newEventStart.format('D')],
      events
    );
    Object.values(eventCreationDay).forEach(hourEvents => {
      hourEvents.forEach(event => {
        if (
          moment(payload.eventBegin).isBetween(event.eventBegin, event.eventEnd) ||
          moment(payload.eventEnd).isBetween(event.eventBegin, event.eventEnd) ||
          moment(event.eventBegin).isBetween(payload.eventBegin, payload.eventEnd) ||
          moment(event.eventEnd).isBetween(payload.eventBegin, payload.eventEnd)
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
