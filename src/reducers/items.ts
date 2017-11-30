import * as uuid from 'uuid';
import { AnyAction } from 'redux';

import { Item, AddItemAction } from '../types';

const items = (state: Item[] = [], action: AnyAction) => {
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
