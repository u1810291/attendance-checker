/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects'
import types from '../../../constants/action-types'
import service from '../../../services/login'

type anyThing = any

function* login({ payload, success }: any): Generator<anyThing> {
  try {
    console.log(payload)
    const res = yield service.login(payload);
    console.log(res);
    success(res);
  }
  catch (err) {
    console.log(err)
  }
}

export default function* attendees() {
  yield takeLatest(types.AUTH_LOGIN, login)
}