import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import { grey200 } from 'material-ui/styles/colors';

import { openDrawer } from '../actions';
import { AppState } from '../reducers';
import { Item } from '../reducers/items';
import { InventoryItem, ItemCreator } from '../components';

interface StateProps {
  items: Item[];
}

interface DispatchProps {
  openDrawer: () => void;
}

interface Params {
  category: string;
}

type Props = StateProps & DispatchProps & RouteComponentProps<Params>;

class InventoryList extends React.Component<Props, {}> {
  render() {
    const { items: allItems } = this.props;
    const { category } = this.props.match.params;
    const categoryItems =
      category === 'all'
        ? allItems
        : allItems.filter(item => item.category === category);
    const items = categoryItems.map(item => (
      <InventoryItem key={item.id} item={item} />
    ));
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.props.openDrawer}
          title={category === 'all' ? 'Sharedventory' : category}
        />
        <div
          style={{
            height: 'calc(100vh - 64px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: grey200,
            flexGrow: 1
          }}
        >
          <ItemCreator />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexFlow: 'wrap',
              alignContent: 'center',
              maxWidth: 800
            }}
          >
            {items.length > 0 ? items : <div> No Items </div>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  items: state.items
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  openDrawer() {
    dispatch(openDrawer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);
