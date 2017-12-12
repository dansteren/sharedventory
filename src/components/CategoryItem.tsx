// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Material UI Components
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import DoneIcon from 'material-ui/svg-icons/action/done';
import EditIcon from 'material-ui/svg-icons/image/edit';
import LabelIcon from 'material-ui/svg-icons/action/label';
import { grey700 } from 'material-ui/styles/colors';

// App Code
import { editCategory, removeCategory } from '../actions';
import { AppState } from '../reducers';

interface ComponentProps {
  category: string;
}

interface StateProps {}

interface DispatchProps {
  editCategory: (oldCategory: string, newCategory: string) => void;
  removeCategory: (category: string) => void;
}

type Props = ComponentProps & StateProps & DispatchProps;

interface State {
  hovered: boolean;
  editing: boolean;
  newCategory: string;
}

class CategoryItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hovered: false,
      editing: false,
      newCategory: props.category
    };
  }

  render() {
    const category = this.props.category;
    const { hovered, editing, newCategory } = this.state;
    return (
      <div
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        style={{
          display: 'flex',
          paddingTop: 12,
          paddingRight: 16,
          paddingBottom: 12,
          paddingLeft: 16,
          alignItems: 'center'
        }}
      >
        {hovered ? (
          <IconButton
            tooltip="Delete label"
            style={{ padding: 0, height: 24, width: 24 }}
            onClick={() => this.props.removeCategory(category)}
          >
            <DeleteIcon color={grey700} />
          </IconButton>
        ) : (
          <LabelIcon color={grey700} />
        )}
        <span style={{ flexGrow: 1, paddingLeft: 32, paddingRight: 8 }}>
          {editing ? (
            <TextField
              fullWidth
              value={newCategory}
              onChange={(event, value) => this.setState({ newCategory: value })}
              onKeyUp={event => {
                if (newCategory !== '' && event.key === 'Enter') {
                  this.props.editCategory(category, newCategory);
                  this.setState({ newCategory: category, editing: false });
                }
              }}
            />
          ) : (
            category
          )}
        </span>
        {editing ? (
          <IconButton
            tooltip="Rename Category"
            style={{ padding: 0, height: 24, width: 24 }}
            onClick={() => {
              this.props.editCategory(category, newCategory);
              this.setState({ newCategory: category, editing: false });
            }}
          >
            <DoneIcon color={grey700} />
          </IconButton>
        ) : (
          <IconButton
            tooltip="Edit Category"
            style={{ padding: 0, height: 24, width: 24 }}
            onClick={() => {
              this.setState({ editing: true });
            }}
          >
            <EditIcon color={grey700} />
          </IconButton>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  removeCategory(category: string) {
    dispatch(removeCategory(category));
  },
  editCategory(oldCategory: string, newCategory: string) {
    dispatch(editCategory(oldCategory, newCategory));
  }
});

export default connect(null, mapDispatchToProps)(CategoryItem);
