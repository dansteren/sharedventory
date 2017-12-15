import {
  Item,
  Loan,
  Visibility,
  DateTime,
  Month,
  Condition
} from '../reducers/items';

export interface AddItemProps {
  name: string;
  category: string;
  visibility: Visibility;
  acquisitionMonth?: Month;
  acquisitionYear?: DateTime;
  additionalInfo?: string;
  purchasePrice?: number;
  loan?: Loan;
  picture?: string;
  quantity?: number;
  storageLocation?: string;
  condition?: Condition;
}

interface AddItemAction {
  type: 'ADD_ITEM';
  data: Partial<Item>;
}

export const addItem = (item: AddItemProps): AddItemAction => ({
  type: 'ADD_ITEM',
  data: item
});

interface DeleteItemAction {
  type: 'DELETE_ITEM';
  id: string;
}

export const deleteItem = (id: string): DeleteItemAction => ({
  type: 'DELETE_ITEM',
  id
});

export type ItemAction = AddItemAction | DeleteItemAction;
