import React from "react";
import ExpenseTable from "./expenseTable";
import ExpenseStore from "./stores/expenseStore";
import {fetchExpenses,approveExpense} from "./actions/expenseActions";

export default class Expenses extends React.Component {
  componentWillMount(){
    const { store } = this.props;
    store.dispatch(fetchExpenses())
    store.subscribe(() => this.forceUpdate());
  }
  acceptExpense(expense) {
    const { store } = this.props;
    store.dispatch(approveExpense(expense));
  }

 updateCategory(expense,newCategory){
    //ExpenseActions.updateExpenseCategory(expense,newCategory);

 }
  addExpense(expense){
    //ExpenseActions.createExpense(expense);
}

render(){
   const props = this.props;
   const { store } = props;
   const state = store.getState();

  const {expenses} = state.expenses;
  return (
    <ExpenseTable expenses={expenses} addExpense={this.addExpense.bind(this)} acceptExpense ={this.acceptExpense.bind(this)} updateCategory={this.updateCategory.bind(this)}/>
  );
}
}
