import EventEmitter from "events";
import Dispatcher from "../dispatcher";
import {checkStatus, parseJSON} from '../lib/Helpers'

class ExpenseStore extends EventEmitter {
  constructor() {
    super()
    this.expenses = [
      {
        "id": 1,
        "tranactionDate": "2016-01-01",
        "transactionDetails": "5575XXXXXXXX6717 -Zabka Polska Z3573,Wroclaw, POLna kwotę 7,77 PLN z dnia 19/02/2016",
        "transactionBankType": "TransakcjaKarta",
        "transactionType" : "Obciażenie",
        "account": 123314324343,
        "amount": 200,
        "approved": false,
        "category" : "Spożywcze",
        "notes" : "jedzenie na weekend"
      },
      {
        "id":2,
        "tranactionDate": "2016-01-02",
        "transactionDetails": "Bankomat Wroclaw",
        "transactionBankType": "Wypłata",
        "transactionType" : "Obciażenie",
        "account": "",
        "amount": 300,
        "approved": true,
        "category" : "Samochód",
        "notes" : "zapłata mechanika"
      },
      {
        "id":3,
        "tranactionDate": "2016-01-02",
        "transactionDetails": "Prad",
        "transactionBankType": "Przelew",
        "transactionType" : "Obciażenie",
        "account": 123314324343,
        "amount": 3,
        "approved": false,
        "category" : "Mieszkanie",
        "notes" : ""
      }
    ];
  }

  createExpense(expense) {
    this.expenses.push(expense);
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
