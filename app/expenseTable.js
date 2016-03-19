import React from "react";
import ExpenseRow from "./expenseRow"
import {Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";

export default class ExpenseTable extends React.Component {
  constructor(props){
    super(props);
}

  render(){
    let rows=[];
    this.props.expenses.forEach(function(expense) {
          rows.push(<ExpenseRow expense={expense} key={expense.id} acceptExpense={this.props.acceptExpense} updateCategory={this.props.updateCategory}/> );
        }.bind(this));
    return (
          <div>
            <div className="col-lg-12">
           <PageHeader>Kontroler wydatków</PageHeader>
          </div>
      <div className="col-lg-12">
      <div className="row ng-scope">
      <div className="col-lg-8">
    <Panel header={<span>Twoje wydatki</span>} >
        <div className="table-responsive">
          <table className="table table-striped">
            <thead> <tr>
            <th>Data </th>
            <th>Szczegłoy</th>
            <th>Rodzaj</th>
            <th>Typ</th>
            <th>Konto</th>
            <th>Kwota</th>
            <th>Kategoria</th>
            <th>Notatki</th>
            <th>Potwierdzenie</th>
            </tr></thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
    </Panel>
  </div>
  </div>
  </div>
      </div>
        );
    }
}
