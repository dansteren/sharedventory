import { ViewAction } from '../actions';
import { Item } from '../reducers/items';

export interface ViewState {
  drawerOpen: boolean;
  dialogOpen: boolean;
  categoryDialogOpen: boolean;
  loginError: string;
  loginTarget?: EventTarget & HTMLDivElement;
  item?: Item;
  itemToEdit?: Item;
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
    case 'VIEW_ITEM':
      return { ...state, loginTarget: action.target, item: action.item };
    case 'HIDE_ITEM':
      return { ...state, item: undefined };
    case 'SHOW_ITEM_EDITOR':
      return { ...state, itemToEdit: action.item };
    case 'HIDE_ITEM_EDITOR':
      return { ...state, itemToEdit: undefined };
    default:
      return state;
  }
};

export default items;
