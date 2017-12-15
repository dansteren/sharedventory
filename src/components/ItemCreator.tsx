// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Material UI Components
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import NameIcon from 'material-ui/svg-icons/action/subject';
import CalendarIcon from 'material-ui/svg-icons/action/today';
import LabelIcon from 'material-ui/svg-icons/action/label';
import QuantityIcon from 'material-ui/svg-icons/image/filter-9-plus';
import PriceIcon from 'material-ui/svg-icons/editor/attach-money';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import ConditionIcon from 'material-ui/svg-icons/toggle/star';

// App Code
import { addItem, AddItemProps, closeDialog } from '../actions';
import { AppState } from '../reducers';
import { conditions, months } from '../reducers/items';
import { FormItem } from '../components';
import { toTitleCase, fromEnum } from '../utils';

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
      category: category === 'all' ? '' : category,
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
      acquisitionMonth: undefined,
      acquisitionYear: undefined,
      additionalInfo: undefined,
      purchasePrice: undefined,
      loan: undefined,
      picture: undefined,
      quantity: 1,
      storageLocation: undefined,
      condition: undefined
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
        label="Add"
        primary
        onClick={() => {
          this.props.addItem(this.state);
          this.clearForm();
        }}
      />
    ];

    return (
      <Dialog
        title="Add Item"
        actions={actions}
        modal
        open={this.props.open}
        onRequestClose={this.props.closeDialog}
        contentStyle={{ maxWidth: 400 }}
        autoScrollBodyContent
      >
        <FormItem icon={<NameIcon />}>
          <TextField
            floatingLabelText="Name"
            fullWidth
            value={this.state.name}
            onChange={(e, name) => this.setState({ name })}
          />
        </FormItem>
        <FormItem icon={<LabelIcon />}>
          <SelectField
            floatingLabelText="Category"
            fullWidth
            maxHeight={200}
            value={this.state.category === '' ? undefined : this.state.category}
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
        </FormItem>
        <FormItem icon={<ConditionIcon />}>
          <SelectField
            floatingLabelText="Condition"
            fullWidth
            maxHeight={200}
            value={this.state.condition}
            onChange={(e, key, condition) => this.setState({ condition })}
          >
            {conditions.map(condition => (
              <MenuItem
                key={condition}
                value={condition}
                primaryText={fromEnum(condition)}
              />
            ))}
          </SelectField>
        </FormItem>
        <FormItem icon={<QuantityIcon />}>
          <TextField
            floatingLabelText="Quantity"
            type="number"
            fullWidth
            min={0}
            value={this.state.quantity ? this.state.quantity.toString() : ''}
            onChange={(e, quantity) =>
              this.setState({ quantity: parseFloat(quantity) })
            }
          />
        </FormItem>
        <FormItem icon={<PriceIcon />}>
          <TextField
            floatingLabelText="Purchase Price"
            type="number"
            min={0}
            fullWidth
            value={
              this.state.purchasePrice
                ? this.state.purchasePrice.toString()
                : ''
            }
            onChange={(e, purchasePrice) =>
              this.setState({ purchasePrice: parseFloat(purchasePrice) })
            }
          />
        </FormItem>
        <FormItem icon={<CalendarIcon />}>
          <div style={{ display: 'flex' }}>
            <SelectField
              floatingLabelText="Month"
              fullWidth
              maxHeight={200}
              value={this.state.acquisitionMonth}
              onChange={(e, key, acquisitionMonth) =>
                this.setState({ acquisitionMonth })
              }
            >
              {months.map(month => (
                <MenuItem
                  key={month}
                  value={month}
                  primaryText={toTitleCase(month)}
                />
              ))}
            </SelectField>
            <div style={{ padding: 8 }} />
            <TextField
              floatingLabelText="Year"
              type="number"
              min={0}
              fullWidth
              value={
                this.state.acquisitionYear
                  ? this.state.acquisitionYear.toString()
                  : ''
              }
              onChange={(e, acquisitionYear) =>
                this.setState({ acquisitionYear: parseFloat(acquisitionYear) })
              }
            />
          </div>
        </FormItem>
        <FormItem icon={<LocationIcon />}>
          <TextField
            floatingLabelText="Storage Location"
            fullWidth
            value={this.state.storageLocation ? this.state.storageLocation : ''}
            onChange={(e, storageLocation) =>
              this.setState({ storageLocation })
            }
          />
        </FormItem>
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
