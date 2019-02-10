import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AppLayout } from './components';
import store from './store';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppLayout} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
