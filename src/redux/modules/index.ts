import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import * as reducers from './reducers'
import * as sagas from './sagas'

export const rootReducer = combineReducers<any>({ ...reducers })

export function* rootSaga() {
  console.log(Object.keys(sagas))
  yield all(Object.keys(sagas).map((key) => sagas[key]));
}

export default (state: any, action: any) => rootReducer(action.type === 'AUTH_LOGIN' ? undefined : state, action)