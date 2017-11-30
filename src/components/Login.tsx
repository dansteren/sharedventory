import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
});

interface LoginProps extends RouteComponentProps<void> {
  login: () => void;
}

class Login extends React.Component<LoginProps, {}> {
  render() {
    return <button onClick={this.props.login}>Login Here!</button>;
  }
}

export default connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess());
    dispatch(push('/'));
  }
}))(Login);
