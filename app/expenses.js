import React from "react";
import ExpenseTable from "./expenseTable";
import ExpenseStore from "./stores/expenseStore";

export default class Expenses extends React.Component {
  constructor(){
      super();
      var expenses =  ExpenseStore.getAll();

      this.state = {
        expenses : expenses,
      };


  }
  acceptExpense(expense) {
    expense.approved = true;
    this.setState(
      {
        expenses : this.state.expenses
      }
    );
  }

  addExpense(expense){
    this.state.expenses.push(expense);
    this.setState({
      expenses: this.state.expenses
    });
  }
  updateCategory(expense,newCategory){
    expense.category = newCategory;
    this.setState(
      {
        expenses : this.state.expenses
      }
    );
  }

render(){
  return (

    <ExpenseTable expenses={this.state.expenses} addExpense={this.addExpense.bind(this)} acceptExpense ={this.acceptExpense.bind(this)} updateCategory={this.updateCategory.bind(this)}/>
  );
}
}
