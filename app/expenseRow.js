import React from "react";

export default class ExpenseRow extends React.Component
{
    render(){
//  var title = this.props.expense.approved ?
  //    this.props.expense.title :
    //  <td style={{color: 'red'}}>
      //  {this.props.epxense.title}
      //</span>;
    return (
      <tr>
        <td>{this.props.expense.date}</td>
        <td>{this.props.expense.title}</td>
        <td>{this.props.expense.account}</td>
        <td>{this.props.expense.amount}</td>
      </tr>
    );
  }

}
