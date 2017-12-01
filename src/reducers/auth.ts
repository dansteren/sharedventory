import { AnyAction } from 'redux';

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false
};

const auth = (state: AuthState = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default auth;
