import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from '../modules'

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleWare]

const store = (initialState: any) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store('initialState')
sagaMiddleWare.run(rootSaga)