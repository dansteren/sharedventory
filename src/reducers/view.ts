import { AnyAction } from 'redux';

export interface ViewState {
  drawerOpen: boolean;
}

const initialState = {
  drawerOpen: false
};

const items = (state: ViewState = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen };
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
};

export default items;
