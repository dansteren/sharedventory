import { AuthState } from './auth';
import { ItemsState } from './items';
import { ViewState } from './view';
import { CategoriesState } from './categories';

export { default as auth } from './auth';
export { default as categories } from './categories';
export { default as items } from './items';
export { default as view } from './view';

export interface AppState {
  auth: AuthState;
  categories: CategoriesState;
  items: ItemsState;
  view: ViewState;
}
