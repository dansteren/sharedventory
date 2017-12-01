import { ViewAction } from '../actions';

export interface ViewState {
  drawerOpen: boolean;
}

const initialState: ViewState = {
  drawerOpen: false
};

const items = (state: ViewState = initialState, action: ViewAction) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
};

export default items;
