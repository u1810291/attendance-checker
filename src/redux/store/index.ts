import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from '../modules'

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleWare]

const createStoreWithSagaMiddlewares = applyMiddleware(...middlewares)(createStore)

const configureStore = (initialState: any) => createStoreWithSagaMiddlewares(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore()
sagaMiddleWare.run(rootSaga)