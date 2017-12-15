//#region (Imports)
// Libraries
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Material UI Components
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
// import ItemIcon from 'material-ui/svg-icons/action/assignment';
import CategoryIcon from 'material-ui/svg-icons/action/label';
import ConditionIcon from 'material-ui/svg-icons/toggle/star';
import QuantityIcon from 'material-ui/svg-icons/image/filter-9-plus';
import PriceIcon from 'material-ui/svg-icons/editor/attach-money';
import CalendarIcon from 'material-ui/svg-icons/action/today';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import AdditionalInfoIcon from 'material-ui/svg-icons/action/subject';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { grey700, grey200 } from 'material-ui/styles/colors';

// App Code
import { hideItem, deleteItem, showItemEditor, openDialog } from '../actions';
import { AppState } from '../reducers';
import { Item } from '../reducers/items';
import { CardField } from '../components';
import { toUSCurrency, fromEnum } from '../utils';
//#endregion

//#region (Types)
interface ComponentProps {
  item: Item;
}

interface StateProps {
  item?: Item;
  anchor?: EventTarget & HTMLDivElement;
}

interface DispatchProps {
  hideItem: () => void;
  editItem: (item: Item) => void;
  deleteItem: (id: string) => void;
}

type Props = ComponentProps & StateProps & DispatchProps;
//#endregion

class ItemViewer extends React.Component<Props, {}> {
  render() {
    const { anchor, item } = this.props;
    return (
      <Popover
        open={item ? true : false}
        anchorEl={anchor}
        animation={PopoverAnimationVertical}
        anchorOrigin={{ horizontal: 'middle', vertical: 'top' }}
        targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
        onRequestClose={this.props.hideItem}
      >
        {!item ? (
          <div />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: 500,
              maxWidth: 768,
              padding: 16
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: 20,
                paddingBottom: 16,
                borderBottom: `1px solid ${grey200}`
              }}
            >
              <div>{item.name ? item.name : '—'}</div>
              <div>
                <IconButton
                  tooltip="Edit item"
                  onClick={() => this.props.editItem(item)}
                >
                  <EditIcon color={grey700} />
                </IconButton>
                <IconButton
                  tooltip="Delete item"
                  onClick={() => this.props.deleteItem(item.id)}
                >
                  <DeleteIcon color={grey700} />
                </IconButton>
              </div>
            </div>
            <CardField
              icon={<CategoryIcon />}
              label="Category"
              value={item.category}
            />
            <CardField
              icon={<ConditionIcon />}
              label="Condition"
              value={fromEnum(item.condition)}
            />
            <CardField
              icon={<QuantityIcon />}
              label="Quantity"
              value={item.quantity}
            />
            <CardField
              icon={<PriceIcon />}
              label="Purchase Price"
              value={toUSCurrency(item.purchasePrice)}
            />
            <CardField
              icon={<CalendarIcon />}
              label="Acquisition Date"
              value={
                '' +
                (item.acquisitionMonth || '') +
                (item.acquisitionYear || '')
              }
            />
            <CardField
              icon={<LocationIcon />}
              label="Storage Location"
              value={item.storageLocation}
            />
            <CardField
              icon={<AdditionalInfoIcon />}
              label="Additional Info"
              value={item.additionalInfo}
              multiline
            />
          </div>
        )}
      </Popover>
    );
  }
}

//#region (Redux Connection)
const mapStateToProps = (state: AppState): StateProps => ({
  item: state.view.item,
  anchor: state.view.loginTarget
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  hideItem() {
    dispatch(hideItem());
  },
  deleteItem(id: string) {
    dispatch(hideItem());
    dispatch(deleteItem(id));
  },
  editItem(item: Item) {
    dispatch(showItemEditor(item));
    dispatch(openDialog());
    dispatch(hideItem());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewer);
//#endregion
