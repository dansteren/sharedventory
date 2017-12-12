import * as React from 'react';

import { grey700 } from 'material-ui/styles/colors';

interface Props {
  icon: JSX.Element;
  children?: JSX.Element;
}

class FormItem extends React.Component<Props, {}> {
  render() {
    const icon = React.cloneElement(this.props.icon, { color: grey700 });
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ alignSelf: 'flex-end', paddingBottom: 10 }}>{icon}</div>
        <div style={{ paddingLeft: 16, flexGrow: 1 }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FormItem;
