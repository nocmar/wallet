"use strict";

jest.unmock('../../app/expenseRow.js');
jest.unmock('react-bootstrap');
// jest.dontMock('classnames');


import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ExpenseRow from '../../app/expenseRow.js';
//import ExpenseTest from '../../app/expenseTest.js';
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from "react-bootstrap"

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
        const expenseRow = TestUtils.renderIntoDocument(<table><tbody><ExpenseRow expense={expense}/></tbody></table>);
 //       const checkboxNode = ReactDOM.findDOMNode(expenseRow);
        //     expect(checkboxNode).toEqual(false);
         //const expenseNode = ReactDOM.findDOMNode(expenseRow);
          // var lable = TestUtils.findRenderedDOMComponentWithClass(expenseRow,'test');
        var button = TestUtils.findRenderedDOMComponentWithTag(expenseRow,'button');


    });
  });
});
