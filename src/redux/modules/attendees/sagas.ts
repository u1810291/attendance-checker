import { takeLatest, put } from 'redux-saga/effects'
import types from '../../../constants/action-types'
import { setData } from './actions'

function* fetchData() {
  try {
    const res = ['object']
    yield put(setData(res))
  }
  catch (err) {
    console.log(err)
  }
}

export default function* attendeesSaga() {
  yield takeLatest(types.GET_PERSON_FACE_IN, fetchData)
}