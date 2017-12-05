import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  category: string;
}

type Props = RouteComponentProps<Params>;

export default class InventoryList extends React.Component<Props, {}> {
  render() {
    const { category } = this.props.match.params;
    return (
      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor: 'red',
          margin: 'auto'
        }}
      >
        {`This is the category ${category}`}
      </div>
    );
  }
}
