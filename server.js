const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/wallet')

const app = express();

// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}



var expenseSchema = {
    id : Number,
    tranactionDate: Date,
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

app.post('/api/expenses', jsonParser,(req,res)=>{
    var expense = new Expense({
        id:42,
        tranactionDate: req.body.tranactionDate,
        transactionDetails: req.body.transactionDetails,
        transactionBankType: req.body.transactionBankType,
        transactionType : req.body.transactionType,
        account: req.body.tranactaccountionDate,
        amount: req.body.amount,
        approved: req.body.approved,
        category : req.body.category,
        notes : req.body.notes
    });

    expense.save(function(err) {
        if (err){
         console.log(err);
           throw err;
        }
        else 
           console.log('save user successfully...');
    });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
