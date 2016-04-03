"use strict";

jest.dontMock('../../app/expenseRow.js');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ExpenseRow from '../../app/expenseRow.js';


describe('Expense row', function(){
  describe('Button OK', ()=>{
    it('should be disabled when expense row is approved',()=>{

        // var ExpenseRow = require('../../app/expenseRow.js');
        var expense =
          {
            "id": 1,
            "tranactionDate": "2016-01-01",
            "transactionDetails": "Zabka Polska Z3573,Wroclaw",
            "transactionBankType": "TransakcjaKarta",
            "transactionType" : "Obciażenie",
            "account": 123314324343,
            "amount": 20,
            "approved": true,
            "category" : "Spożywcze",
            "notes" : "jedzenie na weekend"
          };
        var expenseRow = TestUtils.renderIntoDocument(
          <ExpenseRow expense={expense}/>);
         //const expenseNode = ReactDOM.findDOMNode(expenseRow);

         var button = TestUtils.findRenderedDOMComponentWithTag(expenseRow,'button');
        expect(expenseNode).toEqual(false);

    });
  });
});
