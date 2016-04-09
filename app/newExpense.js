import React from "react";
import {Pagination, Panel, Well, Button, PageHeader, Input} from "react-bootstrap";

export default class NewExpense extends React.Component {
  constructor(props){
    super(props);
    var currentdate = new Date();
    this.state = {
      details : "wpisz cos",
      amount : null,
      notes : "notatki",
      date: currentdate,
      category : ""
    };
}
 handleDateChange(event) {
   this.setState({date: event.target.value});
 }

 handleDetailsChange(event) {
    this.setState({details: event.target.value});
 }

 handleAmountChange(event) {
     this.setState({amount: event.target.value});
 }

 handleNotesChange(event) {
      this.setState({notes: event.target.value});
 }

 handleCategoryChange(event) {
      this.setState({category: event.target.value});
 }

 handleOKClick(event) {
   var expense  =  {
       "id":Date.now(),
       "tranactionDate": "2016-01-02",
       "transactionDetails": this.state.details,
       "transactionBankType": "Przelew",
       "transactionType" : "Obciażenie",
       "account": "",
       "amount": 3,
       "approved": true,
       "category" : this.state.category,
       "notes" : this.state.notes
     }
   this.props.addExpense(expense);
 }

 handleCancelClick(event) {
   alert(this);
      this.setState({
          details : "",
          amount : 0,
          notes : "",
          date: "",
          category : ""
        });
 }

 render(){
    return(
          <div className="col-lg-2">
      <form role="form">
                                              <div className="form-group input-group" style ={{width: "100%"}}  >
                                                  <label className="control-label">Data transakcji</label>
                                                  <input type="text" className="form-control" style={{width: "100%"}}  onChange={this.handleDateChange} value ={this.state.date}/>
                                              </div>
                                              <div className="form-group input-group" style ={{width: "100%"}}  >
                                                  <label className="control-label">Szczegóły transakcji</label>
                                                  <input type="text" className="form-control" onChange={this.handleDetailsChange} value ={this.state.details}/>

                                              </div>
                                              <div className="form-group input-group" style ={{width: "100%"}}  >
                                                  <label className="control-label">Notatki</label>
                                                  <input type="text" className="form-control" onChange={this.handleNotesChange} value ={this.state.notes}/>

                                              </div>
                                              <div className="form-group input-group" style ={{width: "100%"}}  >
                                                <label className="control-label">Kategoria</label>
                                                  <Input type="select" placeholder="Kategoria" style ={{width: "100%"}} value ={this.state.category} onChange={this.handleCategoryChange}>
                                                    <option value="Spożywcze">Spożywcze</option>
                                                    <option value="Alkohol">Alkohol</option>
                                                    <option value="Samochód">Samochód</option>
                                                    <option value="Transport">Transport</option>
                                                    <option value="Mieszkanie">Mieszkanie</option>
                                                  </Input>
                                              </div>
                                              <div className="form-group input-group" style ={{width: "100%"}}  >
                                                <label className="control-label">Konto</label>
                                                <Input type="select" placeholder="Konto">
                                                            <option value="Portfel">Portfel</option>
                                                            <option value="mbank">Karta mbank</option>
                                                </Input>
                                              </div>
                                              <div className="form-group input-group">


                                                  <span className="input-group-addon">$</span>
                                                  <input type="text" className="form-control" onChange={this.handleAmountChange} value ={this.state.amount} placeholder="Kwota"/>

                                              </div>
                                              <button className="btn btn-success btn-lg" style={{width: "50%"}} onClick={this.handleOKClick.bind(this)}>OK</button>
                                                <button className="btn btn-warning btn-lg" style={{width: "50%"}} onClick={this.handleCancelClick.bind(this)}>Anuluj</button>
                                          </form>
                                          </div>

        )}
}
