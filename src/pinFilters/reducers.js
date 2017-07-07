import _ from 'lodash';
import { combineReducers } from 'redux';

function pinFilterList(state = [], action) {
  switch (action.type) {
    case 'ADD_FILTER':
      return [...state, pinFilter(undefined, action)];
    case 'REMOVE_FILTER':
      return state.filter(f => f.filterId !== action.filterId);
    default:
      if(action.filterId) {
        return state.map(f => f.filterId === action.filterId? pinFilter(f, action) : f);
      } else {
        return state;
      }
  }
}

function guid() {
    const S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function pinFilter(
  state = {
    filterId: guid(),
    pinned: false,
    global: false,
    component: 'SimplePinFilter',
    value: null,
  },
  action,
) {
  switch (action.type) {
    case 'ADD_FILTER':
    case 'MODIFY_FILTER':
      return {...state, ...action.filter};
    default:
      return state;
  }
}

const getPinFilters = (state) => _(state.pinFilterList).sortBy(f => !f.pinned).value();
const getGlobalPinFilters = (state) => _(state.pinFilterList).filter(f => f.global).sortBy(f => !f.pinned).value();
const getLocalPinFilters = (state) => _(state.pinFilterList).filter(f => !f.global).sortBy(f => !f.pinned).value();

export { getPinFilters, getGlobalPinFilters, getLocalPinFilters }
export default combineReducers({pinFilterList});