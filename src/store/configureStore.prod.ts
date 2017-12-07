import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { History } from 'history';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import { loadState, saveState } from '../services/localstorage';

/**
 * Configure store takes care of all store related setup. This can include:
 *   - Hydrating the store from persisted state
 *   - Adding middleware
 *   - Adding redux devtools
 */
const configureStore = (history: History) => {
  const store = createStore(
    combineReducers<reducers.AppState>({ ...reducers, routerReducer }),
    loadState(),
    applyMiddleware(routerMiddleware(history), thunk)
  );
  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export default configureStore;
