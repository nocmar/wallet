import React from "react";
import {Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";

export default class Expense extends React.Component {

  render(){
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
            <tbody>
            <tr> <td>2016-01-01 </td><td>3243243 </td><td>Prad </td><td>100  </td>
            </tr><tr> <td>2016-01-01</td><td>3243423 </td><td>Lidl</td><td>50  </td></tr>
            <tr> <td>2016-01-01</td><td>32432432423 </td><td>Bilet </td><td>210   </td></tr>
            </tbody>
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
