/* eslint-disable no-console */
import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import * as reducers from './reducers'
import * as sagas from './sagas'

console.log(Object.values(reducers).map((key: any) => key))
export const rootReducer = combineReducers(Object.values(reducers).map((key: any) => key))

export function* rootSaga() {
  yield all(Object.values(sagas).map((key) => key()))
}

export default (state: any, action: any) => rootReducer(action.type === 'AUTH_LOGIN' ? undefined : state, action)