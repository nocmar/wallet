import React from "react";
import {Pagination, Panel, Well, Button, PageHeader, Input} from "react-bootstrap";

export default class NewExpense extends React.Component {
  constructor(props){
    super(props);
    var currentdate = new Date();
    this.state = {
      value : "wpisz cos",
      amount : 100,
      notes : "notatki",
      date: currentdate
    };
}
handleChange(event) {
   this.setState({value: event.target.value});
 }

  render(){
    return(
      <tr className="success">
        <td style={{width: "10%"}}><input type="text" onChange={this.handleChange} value ={this.state.date}/></td>
        <td style={{width: "20%"}}><input type="text" onChange={this.handleChange} value ={this.state.value}/></td>
        <td>Transakcja gotówkowa</td>
        <td>Obciążenie</td>
        <td>
        <Input type="select" placeholder="Konto">
          <option value="Portfel">Portfel</option>
          <option value="mbank">Karta mbank</option>
        </Input>
        </td>
        <td style={{width: "10%"}}><input type="text" style={{width: "60%"}} onChange={this.handleChange} value ={this.state.amount}/></td>
        <td>
                    <Input type="select" placeholder="Kategoria">
                      <option value="Spożywcze">Spożywcze</option>
                      <option value="Alkohol">Alkohol</option>
                      <option value="Samochód">Samochód</option>
                      <option value="Transport">Transport</option>
                      <option value="Mieszkanie">Mieszkanie</option>
                    </Input></td>
        <td style={{width: "10%"}}><input type="text" onChange={this.handleChange} value ={this.state.notes}/></td>
        <td>
        <button className="btn btn-success btn-lg" style={{width: "50%"}} onClick={this.handleClick}>OK</button>
        <button className="btn btn-warning btn-lg" style={{width: "50%"}} onClick={this.handleClick}>Anuluj</button>
        </td>
      </tr>
        )}
}
