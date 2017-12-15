import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
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
  const store = createStore<reducers.AppState>(
    combineReducers<reducers.AppState>({ ...reducers, routerReducer }),
    loadState(),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
  store.subscribe(() => {
    const { auth, categories, items } = store.getState();
    saveState({
      auth,
      categories,
      items
    });
  });
  return store;
};

export default configureStore;
