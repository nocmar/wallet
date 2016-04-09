import React from "react";
import {Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader, Input} from 'react-bootstrap';
import styles from '../css/newExpense-styles'

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

      <div className="col-lg-4">
      <form role="form">
      <Panel header={<span>Nowy wydatek</span>} >
      <Accordion>

                       <Panel header={<h4 className="panel-title">
                                         <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Podstawowe informacje</a>
                                       </h4>}  eventKey="1">


        <div className="form-group input-group">
            <span className="input-group-addon">$</span>
            <input type="text" className="form-control" onChange={this.handleAmountChange} value ={this.state.amount} placeholder="Kwota"/>
        </div>
        <div className="form-group input-group" style={styles.form}  >
          <label className="control-label">Kategoria</label>
            <Input type="select" placeholder="Kategoria" value ={this.state.category} onChange={this.handleCategoryChange}>
              <option value="Spożywcze">Spożywcze</option>
              <option value="Alkohol">Alkohol</option>
              <option value="Samochód">Samochód</option>
              <option value="Transport">Transport</option>
              <option value="Mieszkanie">Mieszkanie</option>
            </Input>
        </div>
        <div className="form-group input-group" style={styles.form} >
            <label className="control-label">Opis</label>
            <input type="text" className="form-control" onChange={this.handleDetailsChange} value ={this.state.details}/>

        </div>
             </Panel>

    <Panel header={<h4 className="panel-title">

                                   <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Szczegóły</a>
                                 </h4>}  eventKey="2">
        <div className="form-group input-group" style={styles.form}  >
          <label className="control-label">Konto</label>
          <Input type="select" placeholder="Konto">
                      <option value="Portfel">Portfel</option>
                      <option value="mbank">Karta mbank</option>
          </Input>
        </div>
        <div className="form-group input-group" style={styles.form}>
            <label className="control-label">Data transakcji</label>
            <input type="text" className="form-control"   onChange={this.handleDateChange} value ={this.state.date}/>
        </div>

                                                      <div className="form-group input-group" style={styles.form}  >
                                                          <label className="control-label">Notatki</label>
                                                          <input type="text" className="form-control" onChange={this.handleNotesChange} value ={this.state.notes}/>

                                                      </div>

                 </Panel>

               </Accordion>
               <button className="btn btn-success btn-lg" style={{width: "50%"}} onClick={this.handleOKClick.bind(this)}>OK</button>
                 <button className="btn btn-warning btn-lg" style={{width: "50%"}} onClick={this.handleCancelClick.bind(this)}>Anuluj</button>
             </Panel>
                                                                                    </form>
    </div>

        )}
}
