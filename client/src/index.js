import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import VisibleExpenses from "./expenses";
import Accounts from "./accounts";
import Budgets from "./budgets";
import Layout from "./layout";
import Dashboard from "./dashboard";
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={VisibleExpenses}></IndexRoute>
      <Route path="budgets" name="Budgets" component={Budgets}></Route>
      <Route path="accounts" name="Accounts" component={Accounts}></Route>
      <Route path="expenses" name="Expenes" component={VisibleExpenses}></Route>
      <Route path="dashboard" name="Dashboard" component={Dashboard}></Route>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);

