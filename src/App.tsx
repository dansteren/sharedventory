import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import FAB from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';

import './App.css';

interface SettingsMenuProps {}

const SettingsMenu = (props: SettingsMenuProps) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <AccountIcon color="white" />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Account" />
    <MenuItem primaryText="Settings" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

interface State {
  open: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="App">
        <Drawer
          docked={false}
          onRequestChange={open => this.setState({ open })}
          open={this.state.open}
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
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })
          }
          title="Sharedventory"
          iconElementRight={<SettingsMenu />}
        />
        <FAB style={{ position: 'absolute', bottom: 0, right: 0, margin: 25 }}>
          <ContentAdd />
        </FAB>
      </div>
    );
  }
}

export default App;
