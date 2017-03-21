import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import VisibleExpenses from "./expenses";
import Accounts from "./accounts";
import Budgets from "./budgets";
import Layout from "./layout";

import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={VisibleExpenses}></IndexRoute>
      <Route path="budgets" name="Budzety" component={Budgets}></Route>
      <Route path="accounts" name="Konta" component={Accounts}></Route>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);

