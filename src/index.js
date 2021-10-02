import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './router'
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router";
import * as History from "history"
import createStore from './reduxs/Store/store';

const history = History.createBrowserHistory();
export const store = createStore(history);


ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routing />
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
)
