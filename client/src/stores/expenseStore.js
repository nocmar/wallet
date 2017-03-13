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

  updateExpense(expense) {
    console.log("update expense");
    var that = this;
      return fetch(`api/expenses`, {
      method: 'PUT',
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
    this.updateExpense(expense);
  }
  approveExpense(expense){
    expense.approved = true;
    this.updateExpense(expense);
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
        break;
      }
      case "UPDATE_EXPENSE_CATEGORY":{
        this.updateCategory(action.expense, action.newCategory);
        break;
      }
      case "APPROVE_EXPENSE":{
        this.approveExpense(action.expense);
        break;
      }
    }
  }
}

const expenseStore = new ExpenseStore;
Dispatcher.register(expenseStore.handleAction.bind(expenseStore))
export default expenseStore;
