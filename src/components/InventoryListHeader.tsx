// Libraries
import * as React from 'react';

// Material UI Components
import { grey700 } from 'material-ui/styles/colors';

class InventoryListItem extends React.Component<{}, {}> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 12,
          flexGrow: 1,
          fontSize: 13,
          color: grey700,
          width: 800 - 32,
          fontWeight: 500
        }}
      >
        <span style={{ paddingLeft: 2, flexGrow: 1 }}>Name</span>
        <span style={{ width: 200 }}>Category</span>
        <span style={{ width: 100 }}>Condition</span>
      </div>
    );
  }
}

export default InventoryListItem;
