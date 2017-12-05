import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Redirect, Switch } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FAB from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Avatar from 'material-ui/Avatar';

import { openDrawer, openDialog } from '../actions';
import { AppState } from '../reducers';
import { InventoryList, SideDrawer } from '../components';

interface StateProps {
  drawerOpen: boolean;
}

interface DispatchProps {
  openDrawer: () => void;
  openDialog: () => void;
}

type Props = StateProps & DispatchProps & RouteComponentProps<void>;

class Inventory extends React.Component<Props, {}> {
  render() {
    const { match } = this.props;
    return (
      <div>
        <SideDrawer />
        <AppBar
          onLeftIconButtonTouchTap={this.props.openDrawer}
          title="Sharedventory"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Avatar
              src="https://files.graph.cool/cj8p2chm900y20159qr8l9z70/cj97znly903ge015131ash1i0"
              size={32}
            />
          </div>
        </AppBar>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Switch>
            <Route path={`${match.url}/:category`} component={InventoryList} />
            <Redirect to={`${match.url}/all`} />
          </Switch>
        </div>
        <FAB
          style={{ position: 'absolute', bottom: 0, right: 0, margin: 25 }}
          onClick={this.props.openDialog}
        >
          <ContentAdd />
        </FAB>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  openDrawer() {
    dispatch(openDrawer());
  },
  openDialog() {
    dispatch(openDialog());
  }
});

export default connect(null, mapDispatchToProps)(Inventory);
