import EventEmitter from "events";
import Dispatcher from "../dispatcher";
import {checkStatus, parseJSON} from '../lib/Helpers'

class ExpenseStore extends EventEmitter {
  constructor() {
    super()
   }

  createExpense(expense) {
      return fetch(`api/expenses`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
  }).then(res => res.json())
//    this.expenses.push(expense);
    this.emit("change");
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
        this.createExpense(action.expense);
      }
    }
  }
}

const expenseStore = new ExpenseStore;
Dispatcher.register(expenseStore.handleAction.bind(expenseStore))
export default expenseStore;
