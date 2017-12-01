interface OpenDrawerAction {
  type: 'OPEN_DRAWER';
}

interface CloseDrawerAction {
  type: 'CLOSE_DRAWER';
}

export const openDrawer = () =>
  ({
    type: 'OPEN_DRAWER'
  } as OpenDrawerAction);

export const closeDrawer = () =>
  ({
    type: 'CLOSE_DRAWER'
  } as CloseDrawerAction);

export type ViewAction = OpenDrawerAction | CloseDrawerAction;
