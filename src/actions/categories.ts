export interface AddCategoryAction {
  type: 'ADD_CATEGORY';
  category: string;
}

export interface EditCategoryAction {
  type: 'EDIT_CATEGORY';
  oldCategory: string;
  newCategory: string;
}

export interface RemoveCategoryAction {
  type: 'REMOVE_CATEGORY';
  category: string;
}

export const addCategory = (category: string): AddCategoryAction => ({
  type: 'ADD_CATEGORY',
  category
});

export const editCategory = (
  oldCategory: string,
  newCategory: string
): EditCategoryAction => ({
  type: 'EDIT_CATEGORY',
  newCategory,
  oldCategory
});

export const removeCategory = (category: string): RemoveCategoryAction => ({
  type: 'REMOVE_CATEGORY',
  category
});

export type CategoryAction =
  | AddCategoryAction
  | EditCategoryAction
  | RemoveCategoryAction;
