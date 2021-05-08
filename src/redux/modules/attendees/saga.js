/* eslint-disable no-alert */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import moduleName from '../../../services/'
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  yield put(setLoading(true));
  try {
    const res = yield service.getAll(payload.query);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

export default function* adminGroupsSaga() {
  yield takeLatest(types.TABLE_ADMIN_GROUPS_FETCH_DATA, fetchData);
}
