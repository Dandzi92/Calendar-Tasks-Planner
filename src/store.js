import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { logger } from 'redux-logger';
import calendar, { calendarSaga } from './features/calendar';

const reducer = {
  calendar,
};

// function* rootSaga() {
//   yield all([calendarSaga()]);
// }

// const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware()];
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
