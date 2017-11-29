import { createStore } from 'redux';
import { rootReducer } from '../reducers';

/**
 * Configure store takes care of all store related setup. This can include:
 *   - Hydrating the store from persisted state
 *   - Adding middleware
 *   - Adding redux devtools
 */
const configureStore = () => {
  const devtools =
    process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ //tslint:disable-line
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() //tslint:disable-line
      : undefined;

  const store = createStore(
    rootReducer,
    /* put persisted state here (think graphql auth token) */
    devtools
  );
  return store;
};

export default configureStore;
