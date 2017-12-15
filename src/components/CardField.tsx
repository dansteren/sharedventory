// Libraries
import * as React from 'react';

// Material UI Components
import { grey700 } from 'material-ui/styles/colors';

interface Props {
  icon: JSX.Element;
  label: string;
  value?: string | number;
  multiline?: boolean;
}

class CardField extends React.Component<Props, {}> {
  render() {
    const { label, value, multiline } = this.props;
    const icon = React.cloneElement(this.props.icon, { color: grey700 });
    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: 12,
            paddingBottom: 12
          }}
        >
          {icon}
          <div style={{ paddingLeft: 16 }}>
            <span style={{ fontWeight: 500 }}>{label}:</span>{' '}
            {multiline
              ? null
              : value && value.toString().trim() !== '' ? value : '—'}
          </div>
        </div>
        {multiline && (
          <div>{value && value.toString().trim() !== '' ? value : '—'}</div>
        )}
      </div>
    );
  }
}

export default CardField;
