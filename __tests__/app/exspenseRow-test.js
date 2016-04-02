"use strict";

jest.dontMock('../../app/expenseRow.js');
//import React from "react";
import React from 'react';
import TestUtils from 'react-addons-test-utils';

//var React = require('react');
//var TestUtils = React.addons.TestUtils;
//let TestUtils = require('react-addons-test-utils');

describe('Expense row', function(){
  describe('Button OK', ()=>{
    it('should be disabled when expense row is approved',()=>{
        var ExpenseRow = require('../../app/expenseRow.js');
        var expense =
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
          };
        var expenseRow = TestUtils.renderIntoDocuemnt(
          <ExpenseRow expense={expense}/>
        );
    });
  });
});
