// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

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
import { viewItem } from '../actions';
import { AppState } from '../reducers';
import { Item } from '../reducers/items';
import { fromEnum } from '../utils';

interface ComponentProps {
  item: Item;
}

interface DispatchProps {
  viewItem: (target: EventTarget & HTMLDivElement, item: Item) => void;
}

type Props = ComponentProps & DispatchProps;

class InventoryListItem extends React.Component<Props, {}> {
  render() {
    const item = this.props.item;
    return (
      <div
        onClick={event => this.props.viewItem(event.currentTarget, item)}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: fullWhite,
          padding: 12,
          flexGrow: 1,
          fontSize: 13,
          color: grey700,
          width: 800 - 24,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderBottomColor: grey200
        }}
      >
        <div style={{ height: 24, width: 24 }}>
          <ItemIcon color={fade(fullBlack, 0.54)} height={24} width={24} />
        </div>
        <span style={{ paddingLeft: 16, flexGrow: 1, fontWeight: 500 }}>
          {item.name || '—'}
        </span>
        <span style={{ width: 200, fontWeight: 400 }}>
          {item.category || '—'}
        </span>
        <span style={{ width: 100, fontWeight: 400 }}>
          {fromEnum(item.condition) || '—'}
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  viewItem(target: EventTarget & HTMLDivElement, item: Item) {
    dispatch(viewItem(target, item));
  }
});

export default connect(null, mapDispatchToProps)(InventoryListItem);
