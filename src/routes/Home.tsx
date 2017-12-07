import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { push } from 'react-router-redux';

import { AppState } from '../reducers';
import { clearUser } from '../actions';

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

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  logout: () => {
    dispatch(clearUser());
    dispatch(push('/login'));
  }
});

export default connect(null, mapDispatchToProps)(Home);
