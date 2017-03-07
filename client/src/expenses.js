import React from "react";
import ExpenseTable from "./expenseTable";
import ExpenseStore from "./stores/expenseStore";
import * as ExpenseActions from "./actions/expenseActions";
export default class Expenses extends React.Component {
  constructor(){
      super();
       this.state = {
          expenses : [],
        };
      ExpenseStore.getAll((values)=>{
      this.setState( {
          expenses : values,
        });
      });
  }
  componentWillMount(){
    ExpenseStore.on("change",()=> {
     ExpenseStore.getAll((values)=>{
        this.state = {
          expenses : values,
        };
      }); 
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
