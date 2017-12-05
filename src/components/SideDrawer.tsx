import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { openDrawer, closeDrawer } from '../actions';
import { AppState } from '../reducers';

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
        <MenuItem onClick={() => this.props.navigate('appliances')}>
          Appliances
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('arts-crafts-&-sewing')}>
          Arts, Crafts, & Sewing
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('automotive')}>
          Automotive
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('baby')}>Baby</MenuItem>
        <MenuItem onClick={() => this.props.navigate('beauty-&-personal-care')}>
          Beauty & Personal Care
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('books')}>Books</MenuItem>
        <MenuItem onClick={() => this.props.navigate('cds-&-vinyl')}>
          CDs & Vinyl
        </MenuItem>
        <MenuItem
          onClick={() => this.props.navigate('cell-phones-&-accessories')}
        >
          Cell Phones & Accessories
        </MenuItem>
        <MenuItem
          onClick={() => this.props.navigate('collectibles-&-fine-art')}
        >
          Collectibles & Fine Art
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('computers')}>
          Computers
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('computer-games')}>
          Computer Games
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('electronics')}>
          Electronics
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('health')}>
          Health
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('home')}>Home</MenuItem>
        <MenuItem onClick={() => this.props.navigate('luggage-&-travel-gear')}>
          Luggage & Travel Gear
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('miscellaneous')}>
          Miscellaneous
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('movies')}>
          Movies
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('musical-instruments')}>
          Musical Instruments
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('office-supplies')}>
          Office Supplies
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('patio-lawn-&-garden')}>
          Patio Lawn & Garden
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('pet-supplies')}>
          Pet Supplies
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('software')}>
          Software
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('sports-&-outdoors')}>
          Sports & Outdoors
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('tabletop-games')}>
          Tabletop Games
        </MenuItem>
        <MenuItem
          onClick={() => this.props.navigate('tools-&-home-improvement')}
        >
          Tools & Home Improvement
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('toys')}>Toys</MenuItem>
        <MenuItem onClick={() => this.props.navigate('vehicles')}>
          Vehicles
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('video-games')}>
          Video Games
        </MenuItem>
        <MenuItem onClick={() => this.props.navigate('wine')}>Wine</MenuItem>
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
