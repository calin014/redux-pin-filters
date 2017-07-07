import { connect } from 'react-redux';
import SwitchablePinFilter from '../pinFilters/components/SwitchablePinFilter';

export default connect(
    (state, ownProps) => ownProps, 
    (dispatch, { filterId, pinned, value }) => ({
      onClose: () => dispatch({type: 'REMOVE_FILTER', filterId}), 
      onToggleActive: () => dispatch({
        type: 'MODIFY_FILTER', 
        filterId, 
        filter: {value: {...value, active: !value.active}}
      }),
      onTogglePin: () => dispatch({
        type: 'MODIFY_FILTER', 
        filterId,
        filter: {pinned: !pinned}
      })
    }))(SwitchablePinFilter)