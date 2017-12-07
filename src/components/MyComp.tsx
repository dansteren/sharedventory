import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../reducers';
import { Item } from '../reducers/items';
import { addItem, AddItemProps } from '../actions';

interface StateProps {
  items: Item[];
}

interface DispatchProps {
  onClick: () => void;
}

type Props = StateProps & DispatchProps;

class MyComp extends React.Component<Props, {}> {
  render() {
    return (
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          margin: 'auto'
        }}
        onClick={() => this.props.onClick()}
      >
        {this.props.items.map(item => (
          <div key={item.id} style={{ backgroundColor: 'green' }}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  items: state.items
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  onClick: () => {
    const newItem: AddItemProps = {
      name: 'New Item',
      category: 'Books',
      visibility: 'PRIVATE'
    };
    dispatch(addItem(newItem));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComp);
