import React from "react";
import Modal from 'react-modal';
import SplitedExpenseRow from './splitedExpenseRow';

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
        var mainExpense = {
            "amount": this.props.expense.amount,
            "category": this.props.expense.category,
            "id": 0
        }

        var expense = {
            "amount": "",
            "category": "",
            "id": 1
        }
        this.state = {
            modalIsOpen: this.props.modalIsOpen,
            mainExpense: this.props.expense,
            sum: this.props.expense.amount,
            splitedExpenses: [mainExpense, expense]
        };

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.updateCategory = this.updateCategory.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.addNewExpense = this.addNewExpense.bind(this);
    }

    //I'm not sure if it's a propre way of displaying modal, maybe it should be as part of global store and redux?
    componentWillReceiveProps(nextProps) {
        this.setState({ modalIsOpen: nextProps.modalIsOpen });
    }

    afterOpenModal() {
        this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    addNewExpense() {
        var expense = {
            "amount": "",
            "category": "",
            "id": this.state.splitedExpenses.length
        }
        const newExpenses = [...this.state.splitedExpenses, expense]
        this.setState({
            splitedExpenses: newExpenses
        })
    }
    updateCategory(index, value) {
        const newExpense = {
            "amount": this.state.splitedExpenses[index].amount,
            "category": value,
            "id": this.state.splitedExpenses[index].id
        }
        const newExpenses = [...this.state.splitedExpenses]
        var expensetToUpdate = newExpenses.findIndex(expense => expense.id === index)
        newExpenses[expensetToUpdate] = newExpense

        this.setState({
            splitedExpenses: newExpenses
        })
        //this.props.updateCategory(this.props.expense, e.target.value);
    }

    updateAmount(index, value) {
        const newExpense = {
            "amount": value,
            "category": this.state.splitedExpenses[index].category,
            "id": this.state.splitedExpenses[index].id
        }
        const mainExpense = {
            "amount": this.state.sum - value,
            "category": this.state.splitedExpenses[0].category,
            "id": this.state.splitedExpenses[0].id
        }
        const newExpenses = [...this.state.splitedExpenses]
        var expensetToUpdate = newExpenses.findIndex(expense => expense.id === index)
        newExpenses[expensetToUpdate] = newExpense
        newExpenses[0] = mainExpense
        this.setState({
            splitedExpenses: newExpenses
        })
    }
    render() {
        const splitedExp = this.state.splitedExpenses.map((expense) => {
            return <SplitedExpenseRow key={expense.id} {...expense}
                index={expense.id}
                updateCategory={this.updateCategory}
                updateAmount={this.updateAmount} />
        });

        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Podział wydatku">
                <h3 ref="subtitle">Podziel wydatek</h3>
                <div className="row">
                    <div className="col-xs-6">
                        <label>Całość</label>
                    </div>
                    <div className="col-xs-6">
                        <label>{this.state.sum}</label>
                    </div>
                    <form>
                        {splitedExp}
                        <button className="btn btn-info btn-md" onClick={this.addNewExpense}>Nowy</button>

                        <button className="btn btn-success btn-md">OK</button>
                        <button className="btn btn-warning btn-md" onClick={this.closeModal}>Anuluj</button>
                    </form>
                </div>
            </Modal>
        );
    }

}

export default SplitExpense;