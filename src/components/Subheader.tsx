import * as React from 'react';

import './Subheader.css';

interface Props {
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default class Subheader extends React.Component<Props, {}> {
  render() {
    const { text, buttonText, onButtonClick } = this.props;
    return (
      <div className="subheader">
        <span>{text}</span>
        <span className="subheader-button" onClick={onButtonClick}>
          {buttonText.toUpperCase()}
        </span>
      </div>
    );
  }
}
