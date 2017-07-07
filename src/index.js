import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import store from './store';
import GlobalPinFilterList from './smartComponents/GlobalPinFilterList'
import LocalPinFilterList from './smartComponents/LocalPinFilterList'

let inpt;
const App = () =>
  <MuiThemeProvider>
    <Provider store={store}>
      <div>
        <div>
          Global filters: <GlobalPinFilterList />
        </div>
        <div>
          Local Filters: <LocalPinFilterList />          
        </div>
        <hr />
        <div>
          Add Local Filter: 
          <input type="text" ref={r => inpt = r} />
          <button onClick={()=>store.dispatch({type: 'ADD_FILTER', filter: {value: inpt.value}})}>SimplePinFilter</button>           
          <button onClick={()=>store.dispatch({type: 'ADD_FILTER', filter: {component: 'SwitchablePinFilter', value: {active: true, message: inpt.value}}})}>SwitchablePinFilter</button>           
        </div>
      </div>
    </Provider>
  </MuiThemeProvider>;

injectTapEventPlugin();
render(<App />, document.getElementById('root'));
