import React from "react";
import ExpenseTable from "./expenseTable";
import ExpenseStore from "./stores/expenseStore";
import * as ExpenseActions from "./actions/expenseActions";
export default class Expenses extends React.Component {
  constructor(){
      super();
      var expenses =  ExpenseStore.getAll();

      this.state = {
        expenses : expenses,
      };


  }
  componentWillMount(){
    ExpenseStore.on("change",()=> {
      this.setState({
        expenses: ExpenseStore.getAll(),
      })
    })
  }
  acceptExpense(expense) {
    expense.approved = true;
    this.setState(
      {
        expenses : this.state.expenses
      }
    );
  }


  updateCategory(expense,newCategory){
    expense.category = newCategory;
    this.setState(
      {                                                          
      expenses : this.state.expenses
       }
  );
 }
  addExpense(expense){
    ExpenseActions.createExpense(expense);
}

render(){
  return (
    <ExpenseTable expenses={this.state.expenses} addExpense={this.addExpense.bind(this)} acceptExpense ={this.acceptExpense.bind(this)} updateCategory={this.updateCategory.bind(this)}/>
  );
}
}
