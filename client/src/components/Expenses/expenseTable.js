import React from "react"
import ExpenseRow from "./expenseRow"
import NewExpense from "./newExpense"
import { Panel } from "react-bootstrap"
import ReactDataGrid from "react-data-grid"

export default class ExpenseTable extends React.Component {
    constructor(props) {
    super(props);
     this._columns = [
      {
        key: 'amount',
        name: 'Amount',
        editable: true
      },
      {
        key: 'details',
        name: 'Details',
        editable: true
      },
      {
        key: 'category',
        name: 'Category',
        editable: true
      },
      {
        key: 'transactionType',
        name: 'Payment Type',
        editable: false
      },
      {
        key: 'notes',
        name: 'Actions',
        editable: false
      }
    ];
 
  }

  rowGetter(i) {
    return this._rows[i];
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  }

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
    this._rows = this.props.expenses;
    return (
      <ReactDataGrid
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter.bind(this)}
        rowsCount={this._rows.length}
        onGridRowsUpdated={this.handleGridRowsUpdated.bind(this)} />

      
    );
  }
}
