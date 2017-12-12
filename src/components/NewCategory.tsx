// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Material UI Components
import AddIcon from 'material-ui/svg-icons/content/add';
import { grey700 } from 'material-ui/styles/colors';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import DoneIcon from 'material-ui/svg-icons/action/done';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

// App Code
import { addCategory } from '../actions';
import { AppState } from '../reducers';

interface StateProps {}

interface DispatchProps {
  addCategory: (category: string) => void;
}

type Props = StateProps & DispatchProps;

interface State {
  newCategory: string;
}

class NewCategory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newCategory: ''
    };
  }

  render() {
    const { newCategory } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          padding: 16,
          alignItems: 'center'
        }}
      >
        {newCategory === '' ? (
          <AddIcon color={grey700} />
        ) : (
          <IconButton
            tooltip="Cancel"
            style={{ padding: 0, height: 24, width: 24 }}
            onClick={() => this.setState({ newCategory: '' })}
          >
            <CloseIcon color={grey700} />
          </IconButton>
        )}
        <span style={{ flexGrow: 1, paddingLeft: 32, paddingRight: 8 }}>
          <TextField
            hintText="Create New Category"
            fullWidth
            value={newCategory}
            onChange={(event, value) => this.setState({ newCategory: value })}
            onKeyUp={event => {
              if (newCategory !== '' && event.key === 'Enter') {
                this.props.addCategory(newCategory);
                this.setState({ newCategory: '' });
              }
            }}
          />
        </span>
        {newCategory === '' ? (
          undefined
        ) : (
          <IconButton
            tooltip="Create Category"
            style={{ padding: 0, height: 24, width: 24 }}
            onClick={() => {
              this.props.addCategory(newCategory);
              this.setState({ newCategory: '' });
            }}
          >
            <DoneIcon color={grey700} />
          </IconButton>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  addCategory(category: string) {
    dispatch(addCategory(category));
  }
});

export default connect(null, mapDispatchToProps)(NewCategory);
