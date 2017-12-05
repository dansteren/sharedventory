// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Material UI Components
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

// App Code
// import { someAction } from '../actions';
import { AppState } from '../reducers';

interface StateProps {
  value: {};
}

interface DispatchProps {
  action: (value: {}) => void;
}

type Props = StateProps & DispatchProps;

class NewClass extends React.Component<Props, {}> {
  render() {
    return <div>Rendered Content</div>;
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  value: state
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  action() {
    // dispatch(someAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewClass);
