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

interface OpenDialogAction {
  type: 'OPEN_DIALOG';
}

export const openDialog = (): OpenDialogAction => ({
  type: 'OPEN_DIALOG'
});

interface CloseDialogAction {
  type: 'CLOSE_DIALOG';
}

export const closeDialog = (): CloseDialogAction => ({
  type: 'CLOSE_DIALOG'
});

interface ShowLoginErrorAction {
  type: 'SHOW_LOGIN_ERROR';
}

export const showLoginError = (): ShowLoginErrorAction => ({
  type: 'SHOW_LOGIN_ERROR'
});

interface OpenCategoryDialogAction {
  type: 'OPEN_CATEGORY_DIALOG';
}

export const openCategoryDialog = (): OpenCategoryDialogAction => ({
  type: 'OPEN_CATEGORY_DIALOG'
});

interface CloseCategoryDialogAction {
  type: 'CLOSE_CATEGORY_DIALOG';
}

export const closeCategoryDialog = (): CloseCategoryDialogAction => ({
  type: 'CLOSE_CATEGORY_DIALOG'
});

export type ViewAction =
  | OpenDrawerAction
  | CloseDrawerAction
  | OpenDialogAction
  | CloseDialogAction
  | OpenCategoryDialogAction
  | CloseCategoryDialogAction
  | ShowLoginErrorAction;
