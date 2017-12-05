import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { openDrawer, closeDrawer } from '../actions';
import { AppState } from '../reducers';
import { categories, sluggify } from '../utils/categories';

interface StateProps {
  open: boolean;
}

interface DispatchProps {
  openDrawer: () => void;
  closeDrawer: () => void;
  navigate: (category: string) => void;
}

type Props = StateProps & DispatchProps;

class SideDrawer extends React.Component<Props, {}> {
  render() {
    return (
      <Drawer
        docked={false}
        onRequestChange={open =>
          open ? this.props.openDrawer() : this.props.closeDrawer()
        }
        open={this.props.open}
      >
        <MenuItem onClick={() => this.props.navigate('all')}>All</MenuItem>
        {categories.map(category => (
          <MenuItem
            key={sluggify(category)}
            onClick={() => this.props.navigate(sluggify(category))}
          >
            {category}
          </MenuItem>
        ))}
      </Drawer>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  open: state.view.drawerOpen
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  openDrawer() {
    dispatch(openDrawer());
  },
  closeDrawer() {
    dispatch(closeDrawer());
  },
  navigate(category: string) {
    dispatch(push(`/inventory/${category}`));
    dispatch(closeDrawer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
