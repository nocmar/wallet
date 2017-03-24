import React from "react";
import Modal from 'react-modal';

const SplitedExpenseRow=({amount, category})=>(
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
          <input value={amount}/>
          </div>
     </div>
);

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ExpenseRow extends React.Component {
  constructor(props) {
    super(props);
    var expense = {
      "amount": "",
      "category": "",
      "id": 1
    }
    this.state = {
      modalIsOpen: false,
      mainExpense: this.props.expense,
      sum : this.props.expense.amount,
      splitedExpenses: [expense]
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick(e) {
    this.props.acceptExpense(this.props.expense);
  }

  handleDelete(){
    this.props.deleteExpense(this.props.expense);
  }

  handleCategoryChange(e) {
    this.props.updateCategory(this.props.expense, e.target.value);
  }

  render() {

    var disabled = (this.props.expense.approved);
    var expenseState = this.props.expense.approved ? "success" : "warning";
    const splitedExp = this.state.splitedExpenses.map((expense) =>{
      return <SplitedExpenseRow key ={expense.id} {...expense}/>
    });

    return (
      <tr className={expenseState}>
        <td style={{ width: "10%" }}>{this.props.expense.tranactionDate}</td>
        <td style={{ width: "20%" }}>{this.props.expense.transactionDetails}</td>
        <td className="transactionType">{this.props.expense.transactionBankType}</td>
        <td>{this.props.expense.transactionType}</td>
        <td>{this.props.expense.account}</td>
        <td>{this.props.expense.amount}</td>
        <td>
          <select placeholder="Kategoria" value={this.props.expense.category} onChange={this.handleCategoryChange}>
            <option value="Spożywcze">Spożywcze</option>
            <option value="Alkohol">Alkohol</option>
            <option value="Samochód">Samochód</option>
            <option value="Transport">Transport</option>
            <option value="Mieszkanie">Mieszkanie</option>
          </select>
        </td>
        <td>{this.props.expense.notes}</td>
        <td><button className="btn btn-success btn-lg" style={{ width: "25%" }} disabled={disabled} onClick={this.handleClick}>OK</button>
          <button className="btn btn-danger btn-lg" style={{ width: "25%" }} onClick={this.handleDelete}>Del</button>
          <button className="btn btn-info btn-lg" style={{ width: "50%" }} onClick={this.openModal}>Split</button>
           <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
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
          <input value={this.props.expense.amount}/>
          </div>
          {splitedExp}
            <button>split</button>
          </form>
          </div>  
        </Modal>
        </td>
      </tr>
    );
  }

}

export default ExpenseRow;