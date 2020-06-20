import { takeEvery, put } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';

export const monthFeature = createSlice({
  name: 'month',
  initialState: {
    month: [],
    errors: [],
    loading: false,
  },
  reducers: {
    fetchmonthRequest: state => {
      state.loading = true;
    },
    fetchmonthFail: (state, action) => {
      state.loading = false;
      state.errors.push(action.payload);
    },
    fetchmonthSuccess: (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.month = action.payload;
      }
    },
  },
});

export const { fetchmonthRequest, fetchmonthSuccess, fetchmonthFail } = monthFeature.actions;
export default monthFeature.reducer;

function* fetchmonthWorker() {
  try {
    yield put(fetchmonthSuccess());
  } catch (e) {
    yield put(fetchmonthFail(e.message));
  }
}

export function* monthSaga() {
  yield takeEvery(fetchmonthRequest().type, fetchmonthWorker);
}
