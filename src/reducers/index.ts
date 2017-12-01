import { AuthState } from '../reducers/auth';
import { ItemsState } from '../reducers/items';
import { ViewState } from '../reducers/view';

export { default as auth } from './auth';
export { default as items } from './items';
export { default as view } from './view';

export interface State {
  auth: AuthState;
  items: ItemsState;
  view: ViewState;
}
