interface OpenDrawerAction {
  type: 'OPEN_DRAWER';
}

export const openDrawer = (): OpenDrawerAction => ({
  type: 'OPEN_DRAWER'
});

interface CloseDrawerAction {
  type: 'CLOSE_DRAWER';
}

export const closeDrawer = (): CloseDrawerAction => ({
  type: 'CLOSE_DRAWER'
});

interface ShowLoginErrorAction {
  type: 'SHOW_LOGIN_ERROR';
}

export const showLoginError = (): ShowLoginErrorAction => ({
  type: 'SHOW_LOGIN_ERROR'
});

export type ViewAction =
  | OpenDrawerAction
  | CloseDrawerAction
  | ShowLoginErrorAction;
