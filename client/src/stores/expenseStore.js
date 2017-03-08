import EventEmitter from "events";
import Dispatcher from "../dispatcher";
import {checkStatus, parseJSON} from '../lib/Helpers'

class ExpenseStore extends EventEmitter {
  constructor() {
    super()
   }

  saveExpense(expense) {
    console.log("save expense");
    var that = this;
      return fetch(`api/expenses`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
  }).then(res => res.json())
  .then(that.emit("change"))
  }

  updateCategory(expense,newCategory){
    expense.category = newCategory;
    this.saveExpense(expense);
  }
  approveExpense(expense){
    expense.approved = true;
    this.saveExpense(expense);
  }

  getAll(cb) {
     return fetch(`api/expenses`, {
        accept: 'application/json',  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);

  }

  handleAction(action){
    console.log("Action", action);
    switch(action.type){
      case "CREATE_EXPENSE":{
        this.saveExpense(action.expense);
      }
      case "UPDATE_EXPENSE_CATEGORY":{
        this.updateCategory(action.expense, action.newCategory);
      }
      case "APPROVE_EXPENSE":{
        this.approveExpense(action.expense);
      }
    }
  }
}

const expenseStore = new ExpenseStore;
Dispatcher.register(expenseStore.handleAction.bind(expenseStore))
export default expenseStore;
