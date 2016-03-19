import React from "react";
import ExpenseTable from "./expenseTable";

export default class Expenses extends React.Component {
  constructor(){
      super();
      var expenses =  [
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
    <ExpenseTable expenses={this.state.expenses} acceptExpense ={this.acceptExpense.bind(this)} updateCategory={this.updateCategory.bind(this)}/>
  );
}
}
