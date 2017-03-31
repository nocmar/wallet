import React from "react";
import SplitedExpenseRow from './splitedExpenseRow';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


class SplitExpense extends React.Component {
    constructor(props) {
        super(props);
        this.setDefaultState(this.props.modalIsOpen);

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.updateCategory = this.updateCategory.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.addNewExpense = this.addNewExpense.bind(this);
        this.saveSpiltedExpense = this.saveSpiltedExpense.bind(this);
    }

    //I'm not sure if it's a proper way of displaying modal, maybe it should be as part of global store and redux?
    componentWillReceiveProps(nextProps) {
        this.setState({ modalIsOpen: nextProps.modalIsOpen });
    }

    setDefaultState(modalIsOpen) {
        var mainExpense = {
            "amount": this.props.expense.amount,
            "category": this.props.expense.category
        }

        var expense = {
            "amount": '',
            "category": ""
        }
        this.state = {
            modalIsOpen: modalIsOpen,
            mainExpense: this.props.expense,
            sum: this.props.expense.amount,
            splitedExpenses: [mainExpense, expense],
            errorMessage: ""
        };

    }
    afterOpenModal() {
        this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setDefaultState(false);
        this.props.closeModal();
    }

    addNewExpense() {
        var expense = {
            "amount": '',
            "category": ""
        }
        const newExpenses = [...this.state.splitedExpenses, expense]
        this.setState({
            splitedExpenses: newExpenses
        })
    }
    updateCategory(index, value) {
        const newExpense = {
            "amount": this.state.splitedExpenses[index].amount,
            "category": value
        }
        const newExpenses = [...this.state.splitedExpenses]
        newExpenses[index] = newExpense

        this.setState({
            splitedExpenses: newExpenses
        })
        //this.props.updateCategory(this.props.expense, e.target.value);
    }

    getSumOfExpenses(expenses) {
        var sum = 0;
        expenses.forEach(function (expense) {
            sum += Number(expense.amount);
        });
        return sum;
    }
    updateAmount(index, value) {
        const newExpense = {
            "amount": value,
            "category": this.state.splitedExpenses[index].category
        }

        const newExpenses = [...this.state.splitedExpenses]
        newExpenses[index] = newExpense

        var sum = this.state.sum - this.getSumOfExpenses(newExpenses.slice(1))
        if (sum < 0) {
            sum = 0
        }
        const mainExpense = {
            "amount": sum,
            "category": this.state.splitedExpenses[0].category
        }

        newExpenses[0] = mainExpense
        this.setState({
            splitedExpenses: newExpenses
        })
    }

    saveSpiltedExpense() {
        var that = this;

        var sum = this.getSumOfExpenses(this.state.splitedExpenses);
        if (sum > this.state.sum) {
            that.setState({
                //Why '${}' string template doesn't work?   
                errorMessage: "The total itemized amount " + sum + " does not equal the total amount of the transaction " + this.state.sum + ". Please correct the values and try again."
            })
        }
        else {
            this.setState({ modalIsOpen: false, errorMessage: "" });
            var mainExpense = this.state.mainExpense
            var addExpense = this.props.addExpense
            this.state.splitedExpenses.slice(1).forEach(function (expense) {
                if (expense.amount && expense.category && expense.amount > 0) {
                    var newExpense = {
                        "id": Date.now(),
                        "tranactionDate": mainExpense.tranactionDate,
                        "transactionDetails": mainExpense.transactionDetails,
                        "transactionBankType": mainExpense.transactionBankType,
                        "transactionType": mainExpense.transactionType,
                        "account": mainExpense.account,
                        "amount": expense.amount,
                        "approved": true,
                        "category": expense.category,
                        "notes": mainExpense.notes
                    }
                    addExpense(newExpense)
                }
                else {
                    //TODO show validation error
                }
            });
            mainExpense.amount = this.state.splitedExpenses[0].amount;
            mainExpense.category = this.state.splitedExpenses[0].category;
            this.props.updateExpense(mainExpense);
            this.setDefaultState(false);
            this.props.closeModal();
        }
    }
    render() {
        const splitedExp = this.state.splitedExpenses.map((expense) => {
            var index = this.state.splitedExpenses.indexOf(expense)
            return <SplitedExpenseRow key={index} {...expense}
                index={index}
                updateCategory={this.updateCategory}
                updateAmount={this.updateAmount} />
        });

        return (
            <Modal isOpen={this.state.modalIsOpen} toggle={this.closeModal} className={'modal-primary'}>
                <ModalHeader toggle={this.togglePrimary}>Split Expense</ModalHeader>
                <ModalBody>
            
            <div className="card">
              <div className="card-header">
                <strong>Horizontal</strong> Form
              </div>
              <div className="card-block">
                <form className="form-horizontal ">
                  <div className="form-group row">
                <div className="col-md-6 ">
                        <label><strong>Całość</strong></label>
                </div>
                <div className="col-md-6">
                         <label><strong>{this.state.sum}</strong></label>
                </div>
            </div>

                    {splitedExp}
                            <div className="col-xs-6">
                                <button className="btn btn-info btn-sm" onClick={this.addNewExpense}>Nowy wydatek</button>
                            </div>
                </form>
              </div>
            </div> 
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.saveSpiltedExpense}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>

            
        );
    }

}

export default SplitExpense;