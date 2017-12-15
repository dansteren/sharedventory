import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import { grey100 } from 'material-ui/styles/colors';

import { openDrawer } from '../actions';
import { AppState } from '../reducers';
import { Item } from '../reducers/items';
import {
  InventoryListItem,
  ItemCreator,
  InventoryListHeader,
  NoItemsCircle,
  ItemViewer
} from '../components';

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
      <InventoryListItem key={item.id} item={item} />
    ));
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.props.openDrawer}
          title={category === 'all' ? 'Myventory' : category}
        />
        <ItemCreator />
        <div
          style={{
            height: 'calc(100vh - 64px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: items.length > 0 ? 'flex-start' : 'center',
            alignItems: 'center',
            backgroundColor: grey100,
            flexGrow: 1
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: items.length > 0 ? 24 : 0
            }}
          >
            {items.length > 0 ? (
              <div>
                <InventoryListHeader />
                {items}
              </div>
            ) : (
              <NoItemsCircle />
            )}
          </div>
        </div>
        <ItemViewer />
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
