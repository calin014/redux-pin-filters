import { createStore } from 'redux';
import pinFilterListReducer from './pinFilters/reducers';

const store = createStore(
    pinFilterListReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);                          

export default store;