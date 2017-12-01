import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../reducers';
import { Item } from '../reducers/items';

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

const mapStateToProps = (state: State) => {
  const stateProps: StateProps = {
    items: state.items
  };
  return stateProps;
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  const dispatchProps: DispatchProps = {
    onClick: () => {
      const newItem: Partial<Item> = {
        name: 'New Item',
        category: 'Books',
        visibility: 'PRIVATE'
      };
      const action = {
        type: 'ADD_ITEM',
        data: newItem
      };
      dispatch(action);
    }
  };
  return dispatchProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComp);
