import { takeLatest, put } from 'redux-saga/effects'
import types from '../../../constants/action-types'
import { setData } from './actions'

function* fetchData() {
  try {
    const res = ['object']
    console.log(res)
    yield put(setData(res))
  }
  catch (err) {
    console.log(err)
  }
}

export default function* attendees() {
  yield takeLatest(types.GET_PERSON_FACE_IN, fetchData)
}