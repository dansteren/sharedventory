// Libraries
import * as React from 'react';

// Material UI Components
import { ListItem } from 'material-ui/List';
import AddIcon from 'material-ui/svg-icons/content/add';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import DoneIcon from 'material-ui/svg-icons/action/done';

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

interface State {
  editing: boolean;
}

class NewCategory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  render() {
    return (
      <ListItem
        leftIcon={this.state.editing ? <CloseIcon /> : <AddIcon />}
        rightIcon={this.state.editing ? <DoneIcon /> : undefined}
        primaryText="Create New Category"
      />
    );
  }
}

export default NewCategory;
