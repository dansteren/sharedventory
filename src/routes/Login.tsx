import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { cyan500, grey100 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const boxes = require('../assets/boxes.svg');

import { login } from '../actions';
import { AppState } from '../reducers';

const icon = require('../assets/icon.png');

interface StateProps {
  errorText: string;
}

interface DispatchProps {
  login: (username: string, password: string) => void;
}

interface State {
  username: string;
  password: string;
}

type Props = StateProps & DispatchProps & RouteComponentProps<void>;

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: 'testuser',
      password: 'asdf'
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: grey100,
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
            padding: 40
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={icon}
              className="App-logo"
              alt="logo"
              height={24}
              width={24}
            />
            <h1
              style={{
                fontWeight: 400,
                fontSize: 28,
                color: cyan500,
                paddingLeft: 8
              }}
            >
              Myventory
            </h1>
          </div>
          <p>Inventory management made simple.</p>
          <TextField
            floatingLabelText="Email or Username"
            style={{ width: 'auto' }}
            value={username}
            onChange={(event, value) => this.setState({ username: value })}
          />
          <TextField
            floatingLabelText="Password"
            style={{ width: 'auto', marginBottom: 50 }}
            type="password"
            value={password}
            errorText={this.props.errorText}
            onChange={(event, value) => this.setState({ password: value })}
            onKeyUp={event => {
              if (event.key === 'Enter') {
                this.props.login(username, password);
              }
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <RaisedButton
              primary
              label="Sign In"
              onClick={() => this.props.login(username, password)}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  errorText: state.view.loginError
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  login(username: string, password: string) {
    dispatch(login(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
