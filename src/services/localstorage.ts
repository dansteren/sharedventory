import { AppState } from '../reducers';

/**
 * Loads persisted state from localstorage
 */
export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

/**
 * Persists the redux store into localstorage
 */
export function saveState(state: Partial<AppState>) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // Ignoring write errors for now.
  }
}
