import React from "react";
import SplitExpense from '../SplitExpense/splitExpense'

class ExpenseRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
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

    var approved = (this.props.expense.approved);
    var expenseState = this.props.expense.approved ? "approved-expense" : "notapproved-expense";

    return (
      <tr className={expenseState}>
        <td className="text-center">
          <div>{new Date(this.props.expense.tranactionDate).toLocaleDateString()}</div>
        </td>
        <td>
          <div>{this.props.expense.amount}</div>
        </td>
        <td className="text-center">
          <div>{this.props.expense.transactionDetails}</div>
          <div className="small text-muted">
            <span>Notes</span> | {this.props.expense.notes}
          </div>
        </td>
        <td>
          <div className="clearfix">
            <div className="float-left">
            {!approved && 
              <select value={this.props.expense.category} onChange={this.handleCategoryChange} className="form-control" size="1">
                <option value=''>Wybierz...</option>
                <option value="Spożywcze">Spożywcze</option>
                <option value="Alkohol">Alkohol</option>
                <option value="Samochód">Samochód</option>
                <option value="Transport">Transport</option>
                <option value="Mieszkanie">Mieszkanie</option>
              </select>}
              {approved && <div>{this.props.expense.category}</div>

              }
            </div>

          </div>
        </td>
        <td className="text-center">
          <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
        </td>
        <td>
        
          {!approved && <i className="fa fa-thumbs-up icon-table" onClick={this.handleClick}></i>}
          <i className="fa fa-trash icon-table" onClick = {this.handleDelete}></i>
          <i className="fa fa-bars icon-table" onClick={this.openModal}></i>
           <SplitExpense modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} expense={this.props.expense} addExpense={this.props.addExpense} updateExpense={this.props.updateExpense} />
        </td>
      </tr>
    );
  }

}

export default ExpenseRow;