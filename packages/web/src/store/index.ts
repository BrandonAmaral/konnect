import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from './reducers/index';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(allReducers, enhancers);

export default store;
