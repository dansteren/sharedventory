import * as React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { grey700 } from 'material-ui/styles/colors';

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
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

class TrayItem extends React.Component<Props, {}> {
  render() {
    return (
      <div
        style={{
          color: 'white',
          marginTop: 15,
          fontSize: 12
        }}
        onClick={() => this.props.onClick && this.props.onClick()}
      >
        <div
          style={{
            width: 40,
            height: 40,
            backgroundColor: grey700,
            border: '1px red solid',
            color: 'white',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p> ;) </p>
        </div>
        <div>
          <p> {this.props.label}</p>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(TrayItem);
