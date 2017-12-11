import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Redirect, Switch } from 'react-router-dom';

import FAB from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { openDialog } from '../actions';
import { AppState } from '../reducers';
import { InventoryList, SideDrawer, CategoryEditor } from '../components';

interface StateProps {
  drawerOpen: boolean;
}

interface DispatchProps {
  openDialog: () => void;
}

type Props = StateProps & DispatchProps & RouteComponentProps<void>;

class Inventory extends React.Component<Props, {}> {
  render() {
    const { match } = this.props;
    return (
      <div>
        <SideDrawer />
        <CategoryEditor />
        <Switch>
          <Route path={`${match.url}/:category`} component={InventoryList} />
          <Redirect to={`${match.url}/all`} />
        </Switch>
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
  openDialog() {
    dispatch(openDialog());
  }
});

export default connect(null, mapDispatchToProps)(Inventory);
