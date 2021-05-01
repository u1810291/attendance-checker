import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import * as reducers from './reducers'
import * as sagas from './sagas'

export const rootReducer = combineReducers<any>({ ...reducers })


export function* rootSaga() {
  console.log(Object.keys(sagas).map((key) => key))
  yield all({ ...sagas })
}

export default (state: any, action: any) => rootReducer(action.type === 'AUTH_LOGIN' ? undefined : state, action)