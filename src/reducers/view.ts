import { ViewAction } from '../actions';

export interface ViewState {
  drawerOpen: boolean;
  dialogOpen: boolean;
  categoryDialogOpen: boolean;
  loginError: string;
}

const initialState: ViewState = {
  drawerOpen: false,
  dialogOpen: false,
  categoryDialogOpen: false,
  loginError: ''
};

const items = (
  state: ViewState = initialState,
  action: ViewAction
): ViewState => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false };
    case 'OPEN_DIALOG':
      return { ...state, dialogOpen: true };
    case 'CLOSE_DIALOG':
      return { ...state, dialogOpen: false };
    case 'OPEN_CATEGORY_DIALOG':
      return { ...state, categoryDialogOpen: true };
    case 'CLOSE_CATEGORY_DIALOG':
      return { ...state, categoryDialogOpen: false };
    case 'SHOW_LOGIN_ERROR':
      return { ...state, loginError: 'Invalid Credentials. Try again.' };
    default:
      return state;
  }
};

export default items;
