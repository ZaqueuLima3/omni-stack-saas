import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './ducks';
import rootSaga from './saga';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = process.env.NODE_ENV === 'development'
  ? createStore(
    rootReducers,
    compose(
      tronMiddleware(),
      applyMiddleware(sagaMiddleware),
    ),
  )
  : createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
