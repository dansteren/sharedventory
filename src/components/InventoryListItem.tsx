// Libraries
import * as React from 'react';

// Material UI Components
import ItemIcon from 'material-ui/svg-icons/action/assignment';
import {
  grey200,
  grey700,
  fullWhite,
  fullBlack
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

// App Code
import { Item } from '../reducers/items';
import { fromEnum } from '../utils';

interface Props {
  item: Item;
}

class InventoryListItem extends React.Component<Props, {}> {
  render() {
    const item = this.props.item;
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: fullWhite,
          padding: 12,
          flexGrow: 1,
          fontSize: 13,
          color: grey700,
          width: 800 - 32,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderBottomColor: grey200
        }}
      >
        <div style={{ height: 24, width: 24 }}>
          <ItemIcon color={fade(fullBlack, 0.54)} height={24} width={24} />
        </div>
        <span style={{ paddingLeft: 16, flexGrow: 1, fontWeight: 500 }}>
          {item.name}
        </span>
        <span style={{ width: 200, fontWeight: 400 }}>{item.category}</span>
        <span style={{ width: 100, fontWeight: 400 }}>
          {fromEnum(item.condition) || '—'}
        </span>
      </div>
    );
  }
}

export default InventoryListItem;
