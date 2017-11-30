import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { History } from 'history';

import * as reducers from '../reducers';

/**
 * Configure store takes care of all store related setup. This can include:
 *   - Hydrating the store from persisted state
 *   - Adding middleware
 *   - Adding redux devtools
 */
const configureStore = (history: History) => {
  const devtools =
    process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ //tslint:disable-line
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() //tslint:disable-line
      : undefined;

  const store = createStore(
    combineReducers({ ...reducers, routerReducer }),
    applyMiddleware(routerMiddleware(history)),
    devtools
  );
  return store;
};

export default configureStore;
