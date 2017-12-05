// Libraries
import * as React from 'react';

// Material UI Components
// import Card from 'material-ui/Card';

// App Code
import { Item } from '../reducers/items';

interface Props {
  item: Item;
}

class InventoryItem extends React.Component<Props, {}> {
  render() {
    const item = this.props.item;
    return (
      <p>
        Item {item.name || 'unnamed'} of category{' '}
        {item.category || 'uncategorized'}
      </p>
    );
  }
}

export default InventoryItem;
