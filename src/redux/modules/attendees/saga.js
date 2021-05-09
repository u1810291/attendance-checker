/* eslint-disable no-alert */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/attendees'
import {
  setData,
  setError,
  setLoading,
  setTotal,
  setFaceData
} from './actions';

import { dataSelector, faceSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    yield put(setLoading(true));
    const res = yield service.getAll(payload);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* getMatchedFaces({ payload }) {
  try {
    const res = yield service.getEvents(payload);
    const { data } = faceSelector(res.data);
    yield put(setError(''));
    yield put(setFaceData(data));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

export default function* attendeesSaga() {
  yield takeLatest(types.TABLE_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_MATCHED_FACES_DATA, getMatchedFaces);
}
