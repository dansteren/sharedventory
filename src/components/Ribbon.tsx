import * as React from 'react';
import './ribbon.css';

interface Props {
  text: string;
  style?: React.CSSProperties;
}

class Ribbon extends React.Component<Props, {}> {
  render() {
    return (
      <div {...this.props} className="ribbon">
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Ribbon;
