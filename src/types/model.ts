import { Action } from 'redux';

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

// export interface State {
//   user: {
//     id: string;
//     createdAt: DateTime;
//     updatedAt: DateTime;
//     firstName: string;
//     lastName: string;
//     email: string;
//     token: string;
//   };
//   items: Item[];
// }

export type State = Item[];
