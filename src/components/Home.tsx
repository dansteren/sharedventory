import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

const authFail = () => ({
  type: 'AUTH_FAIL'
});

interface HomeProps extends RouteComponentProps<void> {
  logout: () => void;
}

class Home extends React.Component<HomeProps, {}> {
  componentWillMount() {
    alert('Private home is at: ' + this.props.location.pathname);
  }

  render() {
    return <button onClick={this.props.logout}>Logout Here!</button>;
  }
}

export default connect(null, dispatch => ({
  logout: () => {
    dispatch(authFail());
    dispatch(push('/login'));
  }
}))(Home);
