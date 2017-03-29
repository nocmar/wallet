import React from "react";
import SplitExpense from './splitExpense'

class ExpenseRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  handleClick(e) {
    this.props.acceptExpense(this.props.expense);
  }

  handleDelete() {
    this.props.deleteExpense(this.props.expense);
  }

  handleCategoryChange(e) {
    this.props.updateCategory(this.props.expense, e.target.value);
  }

  render() {

    var disabled = (this.props.expense.approved);
    var expenseState = this.props.expense.approved ? "success" : "warning";

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
          <SplitExpense modalIsOpen={this.state.modalIsOpen} expense={this.props.expense} addExpense={this.props.addExpense} updateExpense={this.props.updateExpense} />
        </td>
      </tr>
    );
  }

}

export default ExpenseRow;