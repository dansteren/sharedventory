import { ViewAction } from '../actions';

export interface ViewState {
  drawerOpen: boolean;
  loginError: string;
}

const initialState: ViewState = {
  drawerOpen: false,
  loginError: ''
};

const items = (
  state: ViewState = initialState,
  action: ViewAction
): ViewState => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      const newState: ViewState = { ...state, drawerOpen: true };
      return newState;
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false };
    case 'SHOW_LOGIN_ERROR':
      return { ...state, loginError: 'Invalid Credentials. Try again.' };
    default:
      return state;
  }
};

export default items;
