import { Dispatch } from 'redux';
import { showLoginError } from './view';
import { AppState } from '../reducers';
import { push } from 'react-router-redux';
import { query } from '../services/graphcool';

// Interfaces
// -----------------------------------------------------------------------------
export interface SetUserAction {
  type: 'SET_USER';
  id: string;
  token: string;
}

export interface ClearUserAction {
  type: 'CLEAR_USER';
}

// Action Creators
// -----------------------------------------------------------------------------
export const setUser = (id: string, token: string): SetUserAction => ({
  type: 'SET_USER',
  id,
  token
});

export const clearUser = (): ClearUserAction => ({
  type: 'CLEAR_USER'
});

export type AuthAction = SetUserAction | ClearUserAction;

// Async Action Creators
// -----------------------------------------------------------------------------
export function login(email: string, password: string) {
  return async (dispatch: Dispatch<AppState>) => {
    // TODO: Change this to a real query!
    const result = await query(`
      Some query that passes ${email} and ${password} to graphcool
    `);
    if (result.errors) {
      dispatch(showLoginError());
    } else {
      dispatch(setUser(result.id, result.token));
      dispatch(push('/'));
    }
  };
}
