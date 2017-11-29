import { createStore } from 'redux';
import { rootReducer } from '../reducers';

/**
 * Configure store takes care of all store related setup. This can include:
 *   - Hydrating the store from persisted state
 *   - Adding middleware
 *   - Adding redux devtools
 */
const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
