import { connect } from 'react-redux';
import SimplePinFilter from '../pinFilters/components/SimplePinFilter';

export default connect(
    (state, ownProps) => ownProps, 
    (dispatch, { filterId, global, pinned }) => ({
      onClose: () => dispatch({type: 'REMOVE_FILTER', filterId}), 
      onClick: () => dispatch({
        type: 'MODIFY_FILTER', 
        filterId, 
        filter: {global: !global}
      }),
      onTogglePin: () => dispatch({
        type: 'MODIFY_FILTER', 
        filterId,
        filter: {pinned: !pinned}
      })
    }))(SimplePinFilter)