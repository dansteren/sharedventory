import * as uuid from 'uuid';
import { Action, AnyAction } from 'redux';

export type Visibility = 'PUBLIC' | 'PRIVATE';
export type DateTime = number;
export type UserId = string;

export interface AddItemAction extends Action {
  data: Partial<Item>;
}

export interface Loan {
  to: UserId;
  on: DateTime;
  due: DateTime;
}

export interface Item {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  name: string;
  category: string;
  visibility: Visibility;
  acquisitionDate?: DateTime;
  additionalInfo?: string;
  estimatedValue?: number;
  loan?: Loan;
  picture?: string;
  quantity?: number;
  storageLocation?: string;
}

export type ItemsState = Item[];

const items = (state: ItemsState = [], action: AnyAction) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem: Item = {
        id: uuid.v4(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        name: (action as AddItemAction).data.name || '',
        category: (action as AddItemAction).data.category || '',
        visibility: (action as AddItemAction).data.visibility || 'PRIVATE',
        acquisitionDate: (action as AddItemAction).data.acquisitionDate,
        additionalInfo: (action as AddItemAction).data.additionalInfo,
        estimatedValue: (action as AddItemAction).data.estimatedValue,
        loan: (action as AddItemAction).data.loan,
        picture: (action as AddItemAction).data.picture,
        quantity: (action as AddItemAction).data.quantity,
        storageLocation: (action as AddItemAction).data.storageLocation
      };
      return [...state, newItem];
    default:
      return state;
  }
};

export default items;
