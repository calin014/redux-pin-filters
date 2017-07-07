import { connect } from 'react-redux';
import PinFilterList from '../pinFilters/components/PinFilterList';
import {getGlobalPinFilters} from '../pinFilters/reducers';
import SimplePinFilter from './SimplePinFilter';

export default connect(state => ({
  filters: getGlobalPinFilters(state),
  filterComponents: {SimplePinFilter},
}))(PinFilterList);