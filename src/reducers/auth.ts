import { AuthAction } from '../actions';

export interface AuthState {
  id: string;
  token: string;
}

const initialState: AuthState = {
  id: '',
  token: ''
};

const auth = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.id,
        token: action.token
      };
    case 'CLEAR_USER':
      return {
        ...state,
        id: '',
        token: ''
      };
    default:
      return state;
  }
};

export default auth;
