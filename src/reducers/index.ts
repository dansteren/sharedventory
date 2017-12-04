import { AuthState } from './auth';
import { ItemsState } from './items';
import { ViewState } from './view';

export { default as auth } from './auth';
export { default as items } from './items';
export { default as view } from './view';

export interface AppState {
  auth: AuthState;
  items: ItemsState;
  view: ViewState;
}
