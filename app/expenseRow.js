import React from "react";

export default class ExpenseRow extends React.Component
{
  render(){
  var state = this.props.expense.approved ?
     state = "success" : state = "warning";
    return (
      <tr className={state}>
        <td style={{width: "10%"}}>{this.props.expense.tranactionDate}</td>
        <td style={{width: "20%"}}>{this.props.expense.transactionDetails}</td>
        <td>{this.props.expense.transactionBankType}</td>
        <td>{this.props.expense.transactionType}</td>
        <td>{this.props.expense.account}</td>
        <td>{this.props.expense.amount}</td>
        <td>{this.props.expense.category}</td>
        <td>{this.props.expense.notes}</td>
      </tr>
    );
  }

}
