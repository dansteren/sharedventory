import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppState } from '../reducers';
import { Item } from '../reducers/items';
import { InventoryItem, ItemCreator } from '../components';

interface StateProps {
  items: Item[];
}

interface DispatchProps {}

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
        <ItemCreator />
        <div
          style={{
            width: 500,
            height: 500,
            backgroundColor: 'red',
            marginTop: 32
          }}
        >
          {items.length > 0 ? items : <div> No Items </div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  items: state.items
});

export default connect(mapStateToProps)(InventoryList);
