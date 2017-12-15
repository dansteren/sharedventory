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

export type EditItemProps = AddItemProps;

interface AddItemAction {
  type: 'ADD_ITEM';
  data: Partial<Item>;
}

export const addItem = (item: AddItemProps): AddItemAction => ({
  type: 'ADD_ITEM',
  data: item
});

interface EditItemAction {
  type: 'EDIT_ITEM';
  id: string;
  item: EditItemProps;
}

export const editItem = (id: string, item: EditItemProps): EditItemAction => ({
  type: 'EDIT_ITEM',
  id,
  item
});

interface DeleteItemAction {
  type: 'DELETE_ITEM';
  id: string;
}

export const deleteItem = (id: string): DeleteItemAction => ({
  type: 'DELETE_ITEM',
  id
});

export type ItemAction = AddItemAction | EditItemAction | DeleteItemAction;
