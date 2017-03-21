const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/wallet')

const app = express();

// create application/json parser 
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

var expenseSchema = {
    id: Number,
    tranactionDate: Date,
    transactionDetails: String,
    transactionBankType: String,
    transactionType: String,
    account: Number,
    amount: Number,
    approved: false,
    category: String,
    notes: String
}

var Expense = mongoose.model('Expense', expenseSchema)

app.get('/api/expenses', (req, res) => {
    Expense.find(function (err, doc) {
        res.send(doc);
    })
});

app.delete('/api/expenses/:id', (req, res) => {
    console.log(req.params.id);
   Expense.findByIdAndRemove(req.params.id, function (err, expense) {
        if (err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    });
});
app.put('/api/expenses', jsonParser, (req, res) => {
    Expense.findById(req.body._id, function (err, expense) {
        if (err) {
            res.status(500).send(err);
        } else {
            var item = req.body;
            expense.tranactionDate = item.tranactionDate;
            expense.transactionDetails = item.transactionDetails;
            expense.transactionBankType = item.transactionBankType;
            expense.transactionType = item.transactionType;
            expense.account = item.account;
            expense.amount = item.amount;
            expense.approved = item.approved;
            expense.category = item.category;
            expense.notes = item.notes;

            expense.save(function (err, expense) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(expense);
            });
        }
    });
});
app.post('/api/expenses', jsonParser, (req, res) => {
    var expense = new Expense({
        id: req.body.id,
        tranactionDate: req.body.tranactionDate,
        transactionDetails: req.body.transactionDetails,
        transactionBankType: req.body.transactionBankType,
        transactionType: req.body.transactionType,
        account: req.body.account,
        amount: req.body.amount,
        approved: req.body.approved,
        category: req.body.category,
        notes: req.body.notes
    });

    expense.save(function (err) {
        if (err) {
            res.status(500).send(err)
        }
        res.send(expense);
    });
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
