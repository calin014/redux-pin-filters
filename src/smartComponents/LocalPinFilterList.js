import { connect } from 'react-redux';
import PinFilterList from '../pinFilters/components/PinFilterList';
import {getLocalPinFilters} from '../pinFilters/reducers';
import filterComponents from './filterComponents'

export default connect(state => ({
  filters: getLocalPinFilters(state),
  filterComponents,
}))(PinFilterList);