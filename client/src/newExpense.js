import React from "react";
import moment from  "moment";
import DatePicker from "react-datepicker";
import {Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader, Input} from 'react-bootstrap';
import styles from './newExpense-styles';
import '../node_modules/react-datepicker/dist/react-datepicker.css';

export default class NewExpense extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showButton : true,
      details : "",
      amount : null,
      notes : "",
      date: moment(),
      category : ""
    };
}
handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

 handleDateChange(date) {
   //alert(event.target.value);
   alert (typeof(date));
   //this.setState({date: date.toDate()});
 }
 handleAddNewClick(event){
    this.setState({showButton : false})
 }

 handleOKClick(event) {
   var expense  =  {
       "id":Date.now(),
       "tranactionDate": moment(this.state.date).format('MM/DD/YYYY'),
       "transactionDetails": this.state.details,
       "transactionBankType": "Przelew",
       "transactionType" : "Obciażenie",
       "account": "",
       "amount": this.state.amount,
       "approved": false,
       "category" : this.state.category,
       "notes" : this.state.notes
     }
   this.props.addExpense(expense);
   this.setState({
       showButton : true,
       details : "",
       amount : null,
       notes : "",
       date: moment(),
       category : "",
       approved : false
     });
 }

 handleCancelClick(event) {
       this.setState({showButton : true})
 }

 render(){
  if(this.state.showButton){
        return(
          <div className="col-lg-3">
                         <button className="btn btn-success btn-lg" style={{width: "50%"}} onClick={this.handleAddNewClick.bind(this)}>+ Nowy</button>
                         </div>)
  }
  else {
    return(
      <div className="col-lg-3">
      <Panel header={<span>Nowy wydatek</span>} >
      <Accordion>
      <div className="form-group input-group">
          <span className="input-group-addon">$</span>
          <input type="text" className="form-control" name="amount" onChange={this.handleInputChange.bind(this)} value ={this.state.amount} placeholder="Kwota"/>
      </div>
        <div className="form-group input-group" style={styles.form}  >
          <label className="control-label">Kategoria</label>
            <select placeholder="Kategoria" value ={this.state.category} name= "category" onChange={this.handleInputChange.bind(this)}>
              <option value="Spożywcze">Spożywcze</option>
              <option value="Alkohol">Alkohol</option>
              <option value="Samochód">Samochód</option>
              <option value="Transport">Transport</option>
              <option value="Mieszkanie">Mieszkanie</option>
            </select>
        </div>
        <div className="form-group input-group" style={styles.form} >
            <label className="control-label">Opis</label>
            <input type="text" className="form-control" name="details" onChange={this.handleInputChange.bind(this)} value ={this.state.details}/>

        </div>
     <Panel header={<h4 className="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Szczegóły</a>
                                                </h4>}  eventKey="1">
        <div className="form-group input-group" style={styles.form}  >
          <label className="control-label">Konto</label>
          <select placeholder="Konto">
                      <option value="Portfel">Portfel</option>
                      <option value="mbank">Karta mbank</option>
          </select>
        </div>
        <div className="form-group input-group" style={styles.form}>
            <label className="control-label">Data transakcji</label>
            <DatePicker    selected={this.state.date}
    onChange={this.handleDateChange.bind(this)} />
        </div>
              <div className="form-group input-group" style={styles.form}  >
                  <label className="control-label">Notatki</label>
              <input type="text" className="form-control" name ="notes" onChange={this.handleInputChange.bind(this)} value ={this.state.notes}/>
        </div>
                 </Panel>
               </Accordion>
               <button className="btn btn-success btn-lg" style={{width: "50%"}} onClick={this.handleOKClick.bind(this)}>OK</button>
                 <button className="btn btn-warning btn-lg" style={{width: "50%"}} onClick={this.handleCancelClick.bind(this)}>Anuluj</button>
             </Panel>
    </div>

  )}}
}
