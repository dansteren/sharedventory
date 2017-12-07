import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { replace } from 'react-router-redux';
import { darkBlack, red500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import { AppState } from '../reducers';
const boxes = require('../assets/boxes.svg');

interface StateProps {}

interface DispatchProps {
  redirect: () => void;
}

type Props = StateProps & DispatchProps & RouteComponentProps<void>;

class NotFound extends React.Component<Props, {}> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: red500,
          backgroundImage: `url(${boxes})`
        }}
      >
        <Paper
          zDepth={1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 400,
            height: 450,
            padding: 40,
            color: darkBlack
          }}
        >
          <h1 style={{ fontWeight: 500, fontSize: 32 }}>404 Not Found</h1>
          <p style={{ fontSize: 24 }}>
            Wherever you were trying to go, it doesn't exist. Click the button
            below to go to the home page.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              flexGrow: 1
            }}
          >
            <FlatButton primary label="Go Home" onClick={this.props.redirect} />
          </div>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  redirect() {
    dispatch(replace('/'));
  }
});

export default connect(null, mapDispatchToProps)(NotFound);
