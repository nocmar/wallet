import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Expenses from "./expenses";
import Accounts from "./accounts";
import Budgets from "./budgets";
import Layout from "./layout";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Expenses}></IndexRoute>
      <Route path="budgets" name="Budzety" component={Budgets}></Route>
      <Route path="accounts" name="Konta" component={Accounts}></Route>
    </Route>
  </Router>,
app);
