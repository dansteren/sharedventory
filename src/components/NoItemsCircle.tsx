// Libraries
import * as React from 'react';

// Material UI Components
import { grey500, lightWhite } from 'material-ui/styles/colors';

const emptyBox = require('../assets/empty-box.png');

class NoItemsCircle extends React.Component<{}, {}> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 400,
          width: 400,
          backgroundColor: lightWhite,
          borderTopLeftRadius: 200,
          borderTopRightRadius: 200,
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200
        }}
      >
        <img src={emptyBox} className="App-logo" alt="logo" height={150} />
        <div style={{ fontSize: 20, color: grey500 }}>No items</div>
        <div style={{ marginTop: 8, fontSize: 12, color: grey500 }}>
          click the "+" button.
        </div>
      </div>
    );
  }
}

export default NoItemsCircle;
