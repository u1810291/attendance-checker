/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/auth';

import {
  setToken, setError
} from './actions';

function* login({ payload, success }) {
  try {
    const data = yield service.login(payload);
    success(data);
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* verify({ payload }) {
  try {
    console.log(payload)
    yield put(setToken(payload));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

export default function* authSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
  yield takeLatest(types.AUTH_VERIFY, verify);
}
