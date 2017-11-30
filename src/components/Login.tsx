import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import { cyan500, grey100 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
});

interface LoginProps extends RouteComponentProps<void> {
  login: () => void;
}

class Login extends React.Component<LoginProps, {}> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: grey100
        }}
      >
        <Paper
          zDepth={1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 400,
            height: 450,
            padding: 40
          }}
        >
          <h1 style={{ fontWeight: 400, fontSize: 16, color: cyan500 }}>
            Sharedventory
          </h1>
          <p style={{ fontSize: 24 }}>Sign In</p>
          <TextField
            floatingLabelText="Email or Username"
            style={{ width: 'auto', marginBottom: 50 }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <a style={{ color: cyan500, fontSize: 14 }}>More Options</a>
            <RaisedButton primary label="Sign In" onClick={this.props.login} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess());
    dispatch(push('/'));
  }
}))(Login);
