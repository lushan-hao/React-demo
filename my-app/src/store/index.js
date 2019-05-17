import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import todomySaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),

  );

const store = createStore(reducer, enhancer);

sagaMiddleware.run(todomySaga);


export default store;
