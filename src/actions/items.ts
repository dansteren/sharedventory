import { Item } from '../reducers/items';

interface AddItemAction {
  type: 'ADD_ITEM';
  data: Partial<Item>;
}

export const addItem = (item: Partial<Item>) =>
  ({
    type: 'ADD_ITEM',
    data: item
  } as AddItemAction);

export type ItemAction = AddItemAction;
