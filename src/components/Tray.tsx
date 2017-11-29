import * as React from 'react';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

interface ThemePalette {
  primary1Color?: string;
  primary2Color?: string;
  primary3Color?: string;
  accent1Color?: string;
  accent2Color?: string;
  accent3Color?: string;
  textColor?: string;
  secondaryTextColor?: string;
  alternateTextColor?: string;
  canvasColor?: string;
  borderColor?: string;
  disabledColor?: string;
  pickerHeaderColor?: string;
  clockCircleColor?: string;
  shadowColor?: string;
}

interface Props {
  muiTheme?: {
    palette: ThemePalette;
  };
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
            backgroundColor: this.props.muiTheme
              ? this.props.muiTheme.palette.primary1Color
              : '',
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
