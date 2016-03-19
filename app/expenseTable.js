import React from "react";
import ExpenseRow from "./expenseRow"
import {Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";

export default class ExpenseTable extends React.Component {

  render(){
    var rows = [];
    this.props.expenses.forEach(function(expense) {
    rows.push(<ExpenseRow expense={expense} key={expense.title} /> );
    }.bind(this));
    return (
          <div>
            <div className="col-lg-12">
           <PageHeader>Kontroler wydatków</PageHeader>
          </div>
      <div className="col-lg-12">
      <div className="row ng-scope">
  <div className="col-lg-6">
    <Panel header={<span>Twoje wydatki</span>} >
        <div className="table-responsive">
          <table className="table table-striped">
            <thead> <tr> <th>Data </th><th>Konto</th><th>Tytuł</th><th>Kwota</th></tr></thead>
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