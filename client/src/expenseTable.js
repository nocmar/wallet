import React from "react";
import ExpenseRow from "./ExpenseRow"
import NewExpense from "./newExpense"
import { Pagination, Panel, Well, Button, PageHeader } from "react-bootstrap"
import styles from './styles/panel-styles'

export default class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let rows = [];
    this.props.expenses.forEach(function (expense) {
      rows.push(<ExpenseRow expense={expense} key={expense._id} acceptExpense={this.props.acceptExpense} updateCategory={this.props.updateCategory} />);
    }.bind(this));

    return (
      <div>
        <NewExpense addExpense={this.props.addExpense} />
        <div className="col-lg-12">
          <Panel header={<span>Twoje wydatki</span>} >
            <div className="table-responsive" style={styles.body}>
              <table className="table table-striped">
                <thead><tr>
                  <th>Data</th>
                  <th>Szczegłoy</th>
                  <th>Rodzaj</th>
                  <th>Typ</th>
                  <th>Konto</th>
                  <th>Kwota</th>
                  <th>Kategoria</th>
                  <th>Notatki</th>
                  <th>Potwierdzenie</th>
                </tr></thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}
