// Libraries
import * as React from 'react';

// Material UI Components
import { ListItem } from 'material-ui/List';
import LabelIcon from 'material-ui/svg-icons/action/label';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/image/edit';

interface Props {
  category: string;
}

interface State {
  hovered: boolean;
}

class CategoryItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    const category = this.props.category;
    return (
      <ListItem
        leftIcon={this.state.hovered ? <DeleteIcon /> : <LabelIcon />}
        rightIcon={<EditIcon />}
        primaryText={category}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      />
    );
  }
}

export default CategoryItem;
