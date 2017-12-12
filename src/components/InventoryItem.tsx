// Libraries
import * as React from 'react';
import * as moment from 'moment';

// Material UI Components
import Paper from 'material-ui/Paper';

// App Code
import { Item } from '../reducers/items';
import { toUSCurrency } from '../utils';
import { Ribbon } from '../components';

interface Props {
  item: Item;
}

class InventoryItem extends React.Component<Props, {}> {
  render() {
    const item = this.props.item;
    return (
      <Paper style={{ padding: 16, margin: 16, width: 200, flexGrow: 1 }}>
        <p>
          {item.name || 'Unidentified Item'}{' '}
          {item.quantity && item.quantity > 1 && `(${item.quantity})`}
        </p>
        <p>
          {item.acquisitionDate
            ? moment(item.acquisitionDate).format('ll')
            : 'Unknown Acquisition Date'}
        </p>
        <p>
          {item.purchasePrice ? toUSCurrency(item.purchasePrice) : 'Invaluable'}
        </p>
        <Ribbon
          style={{
            position: 'relative',
            left: -24
          }}
          text={item.category}
        />
      </Paper>
    );
  }
}

export default InventoryItem;
