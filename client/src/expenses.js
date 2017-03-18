import React from "react";
import ExpenseTable from "./expenseTable";
import { fetchExpenses, approveExpense, updateExpenseCategory, addExpense,deleteExpense } from "./actions/expenseActions";

export default class Expenses extends React.Component {
  componentWillMount() {
    const { store } = this.props;
    store.dispatch(fetchExpenses())
    store.subscribe(() => this.forceUpdate());
  }
  acceptExpense(expense) {
    const { store } = this.props;
    store.dispatch(approveExpense(expense));
  }

  updateCategory(expense, newCategory) {
    const { store } = this.props;
    store.dispatch(updateExpenseCategory(expense, newCategory));
  }
  addExpense(expense) {
    const { store } = this.props;
    store.dispatch(addExpense(expense));
  }
  deleteExpense(expense){
    const { store } = this.props;
    store.dispatch(deleteExpense(expense));
  }
  render() {
    const props = this.props;
    const { store } = props;
    const state = store.getState();

    const {expenses} = state.expenses;
    return (
      <ExpenseTable expenses={expenses} 
            addExpense={this.addExpense.bind(this)} 
            acceptExpense={this.acceptExpense.bind(this)} 
            updateCategory={this.updateCategory.bind(this)} 
            deleteExpense={this.deleteExpense.bind(this)}
            />
    );
  }
}
