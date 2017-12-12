import * as uuid from 'uuid';

import { ItemAction } from '../actions';

export type Visibility = 'PUBLIC' | 'PRIVATE';
export type DateTime = number;
export type UserId = string;

export const months = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER'
];

export type Month =
  | 'JANUARY'
  | 'FEBRUARY'
  | 'MARCH'
  | 'APRIL'
  | 'MAY'
  | 'JUNE'
  | 'JULY'
  | 'AUGUST'
  | 'SEPTEMBER'
  | 'OCTOBER'
  | 'NOVEMBER'
  | 'DECEMBER';

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
  acquisitionMonth?: Month;
  acquisitionYear?: DateTime;
  additionalInfo?: string;
  purchasePrice?: number;
  loan?: Loan;
  picture?: string;
  quantity?: number;
  storageLocation?: string;
}

export type ItemsState = Item[];

const items = (state: ItemsState = [], action: ItemAction): ItemsState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem: Item = {
        id: uuid.v4(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        name: action.data.name || '',
        category: action.data.category || '',
        visibility: action.data.visibility || 'PRIVATE',
        acquisitionMonth: action.data.acquisitionMonth,
        acquisitionYear: action.data.acquisitionYear,
        additionalInfo: action.data.additionalInfo,
        purchasePrice: action.data.purchasePrice,
        loan: action.data.loan,
        picture: action.data.picture,
        quantity: action.data.quantity,
        storageLocation: action.data.storageLocation
      };
      return [...state, newItem];
    default:
      return state;
  }
};

export default items;
