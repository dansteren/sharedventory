import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FAB from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import { AppState } from '../reducers';
import { openDrawer, closeDrawer } from '../actions';

interface StateProps {
  drawerOpen: boolean;
}

interface DispatchProps {
  openDrawer: () => void;
  closeDrawer: () => void;
}

type Props = StateProps & DispatchProps & RouteComponentProps<void>;

class Inventory extends React.Component<Props, {}> {
  handleClose = () => this.props.closeDrawer();

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          onRequestChange={open =>
            open ? this.props.openDrawer() : this.props.closeDrawer()
          }
          open={this.props.drawerOpen}
        >
          <MenuItem onClick={this.handleClose}>All</MenuItem>
          <MenuItem onClick={this.handleClose}>Appliances</MenuItem>
          <MenuItem onClick={this.handleClose}>Arts, Crafts, & Sewing</MenuItem>
          <MenuItem onClick={this.handleClose}>Automotive</MenuItem>
          <MenuItem onClick={this.handleClose}>Baby</MenuItem>
          <MenuItem onClick={this.handleClose}>Beauty & Personal Care</MenuItem>
          <MenuItem onClick={this.handleClose}>Books</MenuItem>
          <MenuItem onClick={this.handleClose}>CDs & Vinyl</MenuItem>
          <MenuItem onClick={this.handleClose}>
            Cell Phone & Accessories
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            Collectibles & Fine Art
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Computers</MenuItem>
          <MenuItem onClick={this.handleClose}>Computer Games</MenuItem>
          <MenuItem onClick={this.handleClose}>Electronics</MenuItem>
          <MenuItem onClick={this.handleClose}>Health</MenuItem>
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>Luggage & Travel Gear</MenuItem>
          <MenuItem onClick={this.handleClose}>Miscellaneous</MenuItem>
          <MenuItem onClick={this.handleClose}>Movies</MenuItem>
          <MenuItem onClick={this.handleClose}>Musical Instruments</MenuItem>
          <MenuItem onClick={this.handleClose}>Office Supplies</MenuItem>
          <MenuItem onClick={this.handleClose}>Patio Lawn & Garden</MenuItem>
          <MenuItem onClick={this.handleClose}>Pet Supplies</MenuItem>
          <MenuItem onClick={this.handleClose}>Software</MenuItem>
          <MenuItem onClick={this.handleClose}>Sports & Outdoors</MenuItem>
          <MenuItem onClick={this.handleClose}>Tabletop Games</MenuItem>
          <MenuItem onClick={this.handleClose}>
            Tools & Home Improvement
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Toys</MenuItem>
          <MenuItem onClick={this.handleClose}>Vehicles</MenuItem>
          <MenuItem onClick={this.handleClose}>Video Games</MenuItem>
          <MenuItem onClick={this.handleClose}>Wine</MenuItem>
        </Drawer>
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
        <FAB style={{ position: 'absolute', bottom: 0, right: 0, margin: 25 }}>
          <ContentAdd />
        </FAB>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  drawerOpen: state.view.drawerOpen
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  openDrawer() {
    dispatch(openDrawer());
  },
  closeDrawer() {
    dispatch(closeDrawer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
