// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Material UI Components
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

// App Code
import { addItem, AddItemProps, closeDialog } from '../actions';
import { AppState } from '../reducers';

interface StateProps {
  open: boolean;
  categories: string[];
}

interface DispatchProps {
  closeDialog: () => void;
  addItem: (itemProps: AddItemProps) => void;
}

interface Params {
  category: string;
}

type Props = StateProps & DispatchProps & RouteComponentProps<Params>;

interface State extends AddItemProps {}

class ItemCreator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const category = this.props.match.params.category;
    this.state = {
      name: '',
      category: category !== 'all' ? category : '',
      visibility: 'PRIVATE',
      quantity: 1
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    const currentCategory = this.props.match.params.category;
    const nextCategory = nextProps.match.params.category;
    if (nextCategory !== currentCategory) {
      this.setState({
        category: nextCategory
      });
    }
  }

  clearForm() {
    this.setState({
      name: '',
      category: '',
      visibility: 'PRIVATE',
      acquisitionDate: undefined,
      additionalInfo: undefined,
      purchasePrice: undefined,
      loan: undefined,
      picture: undefined,
      quantity: undefined,
      storageLocation: undefined
    });
  }

  render() {
    const { categories } = this.props;
    const actions = [
      <FlatButton
        key={1}
        label="Cancel"
        primary
        onClick={() => {
          this.clearForm();
          this.props.closeDialog();
        }}
      />,
      <FlatButton
        key={2}
        label="Submit"
        primary
        onClick={() => {
          this.props.addItem(this.state);
          this.clearForm();
        }}
      />
    ];

    return (
      <Dialog
        title={this.state.name || 'Add Item'}
        actions={actions}
        modal
        open={this.props.open}
        onRequestClose={this.props.closeDialog}
        autoScrollBodyContent
      >
        <SelectField
          floatingLabelText="Visibility"
          fullWidth
          value={this.state.visibility}
          onChange={(e, key, visibility) => this.setState({ visibility })}
        >
          <MenuItem value="PRIVATE" primaryText="Private" />
          <MenuItem value="PUBLIC" primaryText="Public" />
        </SelectField>
        <TextField
          floatingLabelText="Quantity"
          type="number"
          fullWidth
          value={this.state.quantity ? this.state.quantity.toString() : ''}
          onChange={(e, quantity) =>
            this.setState({ quantity: parseFloat(quantity) })
          }
        />
        <TextField
          floatingLabelText="Name"
          fullWidth
          value={this.state.name}
          onChange={(e, name) => this.setState({ name })}
        />
        <SelectField
          floatingLabelText="Category"
          fullWidth
          maxHeight={200}
          value={this.state.category}
          onChange={(e, key, category) => this.setState({ category })}
        >
          {categories
            .sort()
            .map(category => (
              <MenuItem
                key={category}
                value={category}
                primaryText={category}
              />
            ))}
        </SelectField>
        <DatePicker
          hintText="Acquisition Date"
          mode="landscape"
          value={
            this.state.acquisitionDate
              ? new Date(this.state.acquisitionDate)
              : undefined
          }
          onChange={(e, date) =>
            this.setState({ acquisitionDate: date.getTime() })
          }
        />
        <TextField
          floatingLabelText="Purchase Price"
          type="number"
          fullWidth
          value={this.state.purchasePrice}
          onChange={(e, purchasePrice) =>
            this.setState({ purchasePrice: parseFloat(purchasePrice) })
          }
        />
        <TextField
          floatingLabelText="Storage Location"
          fullWidth
          value={this.state.storageLocation}
          onChange={(e, storageLocation) => this.setState({ storageLocation })}
        />
        <TextField
          floatingLabelText="Additional Info"
          fullWidth
          multiLine
          rows={3}
          value={this.state.additionalInfo}
          onChange={(e, additionalInfo) => this.setState({ additionalInfo })}
        />
      </Dialog>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  open: state.view.dialogOpen,
  categories: state.categories
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  addItem(itemProps: AddItemProps) {
    dispatch(addItem(itemProps));
    dispatch(closeDialog());
  },
  closeDialog() {
    dispatch(closeDialog());
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemCreator)
);
