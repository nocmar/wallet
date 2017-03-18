import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Expenses from "./expenses";
import Accounts from "./accounts";
import Budgets from "./budgets";
import Layout from "./layout";

import { Provider } from "react-redux"
import store from "./store"

var ExpenseWrapper = React.createClass({
  render: function () {
    return (
        <Expenses store={store} />
    );
  }
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ExpenseWrapper}></IndexRoute>
      <Route path="budgets" name="Budzety" component={Budgets}></Route>
      <Route path="accounts" name="Konta" component={Accounts}></Route>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);

