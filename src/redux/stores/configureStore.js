import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas/sagas';

const nextReducer = require('../reducers');

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
