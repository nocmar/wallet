import React from "react";
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from "react-bootstrap"


export default class ExpenseRow extends React.Component
{
  constructor(props){
    super(props);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
      this.props.acceptExpense(this.props.expense);
  }

  handleCategoryChange(e){
     this.props.updateCategory(this.props.expense,e.target.value);
  }

  render(){
  var disabled = (this.props.expense.approved);
  var state = this.props.expense.approved ?
     state = "success" : state = "warning";
    return (
      <tr className={state}>
        <td style={{width: "10%"}}>{this.props.expense.tranactionDate}</td>
        <td style={{width: "20%"}}>{this.props.expense.transactionDetails}</td>
        <td className="transactionType">{this.props.expense.transactionBankType}</td>
        <td>{this.props.expense.transactionType}</td>
        <td>{this.props.expense.account}</td>
        <td>{this.props.expense.amount}</td>
        <td>
                    <Input type="select" placeholder="Kategoria" value ={this.props.expense.category} onChange={this.handleCategoryChange}>
                      <option value="Spożywcze">Spożywcze</option>
                      <option value="Alkohol">Alkohol</option>
                      <option value="Samochód">Samochód</option>
                      <option value="Transport">Transport</option>
                      <option value="Mieszkanie">Mieszkanie</option>
                    </Input></td>
        <td>{this.props.expense.notes}</td>
        <td><button className="btn btn-success btn-lg" style={{width: "100%"}} disabled={disabled} onClick={this.handleClick}>OK</button></td>
      </tr>
    );
  }

}
