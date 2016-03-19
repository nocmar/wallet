import React from "react";
import ReactDOM from "react-dom";
import ExpenseTable from "./expenseTable";
var expenses =  [
  {
    "date": "2016-01-01",
    "title": "Lidl",
    "account": 123314324343,
    "amount": 200,
    "approved": false
  },
  {
    "date": "2016-01-02",
    "title": "Prad",
    "account": 123314324343,
    "amount": 300,
    "approved": false
  },
  {
    "date": "2016-01-02",
    "title": "Bilet",
    "account": 123314324343,
    "amount": 3,
    "approved": false
  }
];
ReactDOM.render(
  <ExpenseTable expenses={expenses}/>,  document.getElementById('app')
);
