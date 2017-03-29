import React from "react";
import ExpenseTable from "./expenseTable";
import { connect } from 'react-redux'
import { fetchExpenses, approveExpense, updateExpenseCategory, addExpense, deleteExpense, updateExpense } from "./actions/expenseActions";


class Expenses extends React.Component {
  componentWillMount() {
    this.props.fetchExpenses();
  }
  render() {
    return (
      <ExpenseTable expenses={this.props.expenses.expenses}
        addExpense={this.props.addExpense}
        acceptExpense={this.props.acceptExpense}
        updateCategory={this.props.updateCategory}
        deleteExpense={this.props.deleteExpense}
        updateExpense = {this.props.updateExpense}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExpenses: () => {
      dispatch(fetchExpenses())
    },
    acceptExpense: (expense) => {
      dispatch(approveExpense(expense))
    },
    deleteExpense: (expense) => {
      dispatch(deleteExpense(expense))
    },
    addExpense: (expense) => {
      dispatch(addExpense(expense))
    },
    updateCategory: (expense, newCategory) => {
      dispatch(updateExpenseCategory(expense, newCategory))
    },
    updateExpense: (expense) => {
      dispatch(updateExpense(expense))
    }

  }
}

const VisibleExpenses = connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses)

export default VisibleExpenses




