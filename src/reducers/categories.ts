import { CategoryAction } from '../actions';

export type CategoriesState = string[];

const initialState = [
  'Books',
  'CDs & Vinyl',
  'Computer Games',
  'Electronics',
  'Luggage & Travel Gear',
  'Miscellaneous',
  'Movies',
  'Musical Instruments',
  'Sport & Outdoors',
  'Tabletop Games',
  'Tools',
  'Video Games'
];

const categories = (
  state: CategoriesState = initialState,
  action: CategoryAction
): CategoriesState => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...state, action.category];
    case 'REMOVE_CATEGORY':
      return state.filter(category => category !== action.category);
    case 'EDIT_CATEGORY':
      const newCategories = state.filter(
        category => category !== action.oldCategory
      );
      newCategories.push(action.newCategory);
      return newCategories;
    default:
      return state;
  }
};

export default categories;
