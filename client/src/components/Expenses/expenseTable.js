import React from "react";
import ExpenseRow from "./expenseRow"
import NewExpense from "./newExpense"
import { Panel } from "react-bootstrap"

export default class ExpenseTable extends React.Component {
  render() {
    let rows = [];
    this.props.expenses.forEach(function (expense) {
      rows.push(<ExpenseRow expense={expense}
        key={expense._id}
        acceptExpense={this.props.acceptExpense}
        deleteExpense={this.props.deleteExpense}
        updateCategory={this.props.updateCategory}
        addExpense={this.props.addExpense}
        updateExpense={this.props.updateExpense}
      />);
    }.bind(this));

    return (
      <div>
        <NewExpense addExpense={this.props.addExpense} />
        <table className="table table-hover table-outline mb-0 hidden-sm-down">
          <thead className="thead-default">
            <tr>
              <th className="text-center"><i className="fa fa-calendar"></i></th>
              <th>Amount</th>
              <th className="text-center">Detials</th>
              <th>Category</th>
              <th className="text-center">Payment Type</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
