// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Material UI Components
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { List } from 'material-ui/List';

// App Code
import {
  closeCategoryDialog,
  addCategory,
  editCategory,
  removeCategory
} from '../actions';
import { AppState } from '../reducers';
import { CategoryItem, NewCategory } from '../components';

interface StateProps {
  open: boolean;
  categories: string[];
}

interface DispatchProps {
  closeCategoryDialog: () => void;
  addCategory: (category: string) => void;
  editCategory: (oldCategory: string, newCategory: string) => void;
  removeCategory: (category: string) => void;
}

type Props = StateProps & DispatchProps;

class CategoryEditor extends React.Component<Props, {}> {
  render() {
    const actions = [
      <FlatButton
        key={1}
        label="Done"
        primary
        onClick={() => {
          this.props.closeCategoryDialog();
        }}
      />
    ];

    return (
      <Dialog
        title="Edit Categories"
        actions={actions}
        open={this.props.open}
        onRequestClose={this.props.closeCategoryDialog}
        autoScrollBodyContent
        contentStyle={{
          maxWidth: 400
        }}
      >
        <List>
          <NewCategory />
          {this.props.categories.map(category => {
            return <CategoryItem key={category} category={category} />;
          })}
        </List>
      </Dialog>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  open: state.view.categoryDialogOpen,
  categories: state.categories
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  closeCategoryDialog() {
    dispatch(closeCategoryDialog());
  },
  addCategory(category: string) {
    dispatch(addCategory(category));
  },
  editCategory(oldCategory: string, newCategory: string) {
    dispatch(editCategory(oldCategory, newCategory));
  },
  removeCategory(category: string) {
    dispatch(removeCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditor);
