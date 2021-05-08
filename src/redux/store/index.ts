
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga, composeEnhancers } from '../modules'

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleWare]

const initialState1: { [key: string]: [] } = {}

const store = (initialState: string) => createStore(rootReducer, initialState1[initialState], composeEnhancers(applyMiddleware(...middlewares)));

export default store('initialState')
sagaMiddleWare.run(rootSaga)
