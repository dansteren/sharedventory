import { Item } from '../reducers/items';

interface AddItemAction {
  type: 'ADD_ITEM';
  data: Partial<Item>;
}

export const addItem = (item: Partial<Item>): AddItemAction => ({
  type: 'ADD_ITEM',
  data: item
});

export type ItemAction = AddItemAction;
