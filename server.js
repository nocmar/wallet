const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wallet')

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


var expenseSchema = {
    id : Number,
    ranactionDate: Date,
    transactionDetails: String,
    transactionBankType: String,
    transactionType : String,
    account: Number,
    amount: Number,
    approved: false,
    category : String,
    notes : String
}

var Expense = mongoose.model('Expense', expenseSchema)
app.get('/api/expenses', (req, res) => {
    Expense.find(function(err,doc){
      res.send(doc);
    })
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
