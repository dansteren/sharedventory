import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

import { signOut } from '../actions';

interface StateProps {}

interface DispatchProps {
  logout: () => void;
}

type Props = StateProps & DispatchProps & RouteComponentProps<void>;

class Home extends React.Component<Props, {}> {
  componentWillMount() {
    alert('Private home is at: ' + this.props.location.pathname);
  }

  render() {
    return <button onClick={this.props.logout}>Logout Here!</button>;
  }
}

export default connect(null, dispatch => ({
  logout: () => {
    dispatch(signOut());
    dispatch(push('/login'));
  }
}))(Home);
