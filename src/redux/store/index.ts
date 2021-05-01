import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from '../modules'


export default function store(initialState: any) {
  const sagaMiddleWare = createSagaMiddleware()

  const middlewares = [thunk, sagaMiddleWare]

  return {
    ...createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares))),
    reunSaga: sagaMiddleWare.run(rootSaga)
  }
}