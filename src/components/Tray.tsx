import * as React from 'react';
import Paper from 'material-ui/Paper';
import { MuiTheme } from 'material-ui/styles';
import muiThemeable from 'material-ui/styles/muiThemeable';

interface PaletteRequired {
  palette: __MaterialUI.Styles.ThemePalette;
}

interface Props {
  muiTheme: MuiTheme & PaletteRequired;
  children?: JSX.Element[];
}

class Tray extends React.Component<Props, {}> {
  render() {
    return (
      <Paper zDepth={1}>
        <div
          style={{
            width: 70,
            height: '100vh',
            float: 'left',
            backgroundColor: this.props.muiTheme.palette.primary1Color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          {this.props.children}
        </div>
      </Paper>
    );
  }
}

export default muiThemeable()(Tray);
