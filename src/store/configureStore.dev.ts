import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';

/**
 * Configure store takes care of all store related setup. This can include:
 *   - Hydrating the store from persisted state
 *   - Adding middleware
 *   - Adding redux devtools
 */
const configureStore = (history: History) => {
  return createStore(
    combineReducers<reducers.AppState>({ ...reducers, routerReducer }),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
};

export default configureStore;
