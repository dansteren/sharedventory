import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import LabelIcon from 'material-ui/svg-icons/action/label';
import HomeIcon from 'material-ui/svg-icons/action/home';

import { openDrawer, closeDrawer, openCategoryDialog } from '../actions';
import { AppState } from '../reducers';
import { Subheader } from '../components';
import { sluggify } from '../utils/categories';

interface StateProps {
  open: boolean;
  categories: string[];
}

interface DispatchProps {
  openDrawer: () => void;
  closeDrawer: () => void;
  openCategoryDialog: () => void;
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
        <List>
          <ListItem
            style={{ fontSize: 13 }}
            primaryText="All Items"
            leftIcon={<HomeIcon />}
            onClick={() => this.props.navigate('all')}
          />
          <Divider />
          <Subheader
            text="Categories"
            buttonText="Edit"
            onButtonClick={this.props.openCategoryDialog}
          />
          {this.props.categories.map(category => (
            <ListItem
              key={sluggify(category)}
              style={{ fontSize: 13 }}
              primaryText={category}
              leftIcon={<LabelIcon />}
              onClick={() => this.props.navigate(sluggify(category))}
            />
          ))}
        </List>
      </Drawer>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  open: state.view.drawerOpen,
  categories: state.categories
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  openDrawer() {
    dispatch(openDrawer());
  },
  closeDrawer() {
    dispatch(closeDrawer());
  },
  openCategoryDialog() {
    dispatch(openCategoryDialog());
  },
  navigate(category: string) {
    dispatch(push(`/inventory/${category}`));
    dispatch(closeDrawer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
