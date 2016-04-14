import { EventEmitter } from "events";

//import dispatcher from "../dispatcher";

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

  getAll() {
    return this.;
  }

  // handleActions(action) {
  //   switch(action.type) {
  //     case "CREATE_TODO": {
  //       this.createTodo(action.text);
  //       break;
  //     }
  //     case "RECEIVE_TODOS": {
  //       this.todos = action.todos;
  //       this.emit("change");
  //       break;
  //     }
  //   }
  // }

}

const expenseStore = new ExpenseStore;
//dispatcher.register(expenseStore.handleActions.bind(todoStore));

export default expenseStore;
