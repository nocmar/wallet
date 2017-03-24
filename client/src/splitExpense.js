import React from "react";
import Modal from 'react-modal';

const SplitedExpenseRow = ({amount, category}) => (
    <div>
        <div className="col-xs-6">
            <select placeholder="Kategoria" value={category}>
                <option value="Spożywcze">Spożywcze</option>
                <option value="Alkohol">Alkohol</option>
                <option value="Samochód">Samochód</option>
                <option value="Transport">Transport</option>
                <option value="Mieszkanie">Mieszkanie</option>
            </select>
        </div>
        <div className="col-xs-6">
            <input value={amount} />
        </div>
    </div>
);

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
        var expense = {
            "amount": "",
            "category": "",
            "id": 1
        }
        this.state = {
            modalIsOpen: this.props.modalIsOpen,
            mainExpense: this.props.expense,
            sum: this.props.expense.amount,
            splitedExpenses: [expense]
        };

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
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
    handleCategoryChange(e) {
        this.props.updateCategory(this.props.expense, e.target.value);
    }

    render() {
        const splitedExp = this.state.splitedExpenses.map((expense) => {
            return <SplitedExpenseRow key={expense.id} {...expense} />
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
                        <label>{this.props.expense.amount}</label>
                    </div>
                    <form>
                        <div className="col-xs-6">
                            <select placeholder="Kategoria" value={this.props.expense.category} onChange={this.handleCategoryChange}>
                                <option value="Spożywcze">Spożywcze</option>
                                <option value="Alkohol">Alkohol</option>
                                <option value="Samochód">Samochód</option>
                                <option value="Transport">Transport</option>
                                <option value="Mieszkanie">Mieszkanie</option>
                            </select>
                        </div>
                        <div className="col-xs-6">
                            <input value={this.props.expense.amount} />
                        </div>
                        {splitedExp}
                        <button className="btn btn-success btn-md">OK</button>
                        <button className="btn btn-warning btn-md" onClick={this.closeModal}>Anuluj</button>
                    </form>
                </div>
            </Modal>
        );
    }

}

export default SplitExpense;