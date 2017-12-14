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

export type ItemAction = AddItemAction;
