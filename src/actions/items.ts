import { Item, Loan, Visibility, DateTime } from '../reducers/items';

export interface AddItemProps {
  name: string;
  category: string;
  visibility: Visibility;
  acquisitionDate?: DateTime;
  additionalInfo?: string;
  purchasePrice?: number;
  loan?: Loan;
  picture?: string;
  quantity?: number;
  storageLocation?: string;
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
