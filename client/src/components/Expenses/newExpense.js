import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Panel, Accordion } from 'react-bootstrap';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class NewExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: true,
      modalIsOpen: false,
      details: "",
      amount: null,
      notes: "",
      date: moment(),
      category: ""
    };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleDateChange(date) {
    //alert(event.target.value);
    alert(typeof (date));
    //this.setState({date: date.toDate()});
  }
  handleAddNewClick(event) {
    this.setState({ showButton: false,     modalIsOpen: true})
  }

  handleOKClick(event) {
    var expense = {
      "id": Date.now(),
      "tranactionDate": moment(this.state.date).format('MM/DD/YYYY'),
      "transactionDetails": this.state.details,
      "transactionBankType": "Przelew",
      "transactionType": "Obciażenie",
      "account": "",
      "amount": this.state.amount,
      "approved": false,
      "category": this.state.category,
      "notes": this.state.notes
    }
    this.props.addExpense(expense);
    this.setState({
      showButton: true,
      modalIsOpen: false ,
      details: "",
      amount: null,
      notes: "",
      date: moment(),
      category: "",
      approved: false
    });
  }

  handleCancelClick(event) {
    this.setState({ showButton: true,    modalIsOpen: false })
  }

  render() {
    if (this.state.showButton) {
      return (
        <div className="col-lg-3">
          <button className="btn btn-success btn-lg" style={{ width: "50%" }} onClick={this.handleAddNewClick.bind(this)}>+ Nowy</button>
        </div>)
    }
    else {
      return (
 <Modal isOpen={this.state.modalIsOpen} toggle={this.closeModal} className={'modal-primary'}>
                <ModalHeader toggle={this.togglePrimary}>New expense</ModalHeader>
                <ModalBody>
                    <form className="form-horizontal ">

  <div className="form-group row">
                    <label className="col-md-4 form-control-label">Amount</label>
                    <div className="col-md-8">
                       <div className="input-prepend input-group">
                        <span className="input-group-addon">$</span>
                        <input type="number" className="form-control" name="amount" onChange={this.handleInputChange.bind(this)} value={this.state.amount} placeholder="Amount" />
                        </div>
                    </div>
                  </div> 
                <div className="form-group row">
                    <label className="col-md-4 form-control-label">Category</label>
                    <div className="col-md-8">
                       <select placeholder="Kategoria" value={this.state.category} name="category" className="form-control" size="1" onChange={this.handleInputChange.bind(this)}>
                   <option value="">Select...</option>
                  <option value="Spożywcze">Spożywcze</option>
                  <option value="Alkohol">Alkohol</option>
                  <option value="Samochód">Samochód</option>
                  <option value="Transport">Transport</option>
                  <option value="Mieszkanie">Mieszkanie</option>
                </select>
                    </div>
                  </div> 
              <div className="form-group row">
                    <label className="col-md-4 form-control-label">Description</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" name="details" onChange={this.handleInputChange.bind(this)} value={this.state.details} />
                    </div>
                  </div> 
                <div className="form-group row">
                    <label className="col-md-4 form-control-label">Account</label>
                    <div className="col-md-8">
                           <select placeholder="Konto" className="form-control" size="1">
                    <option value="Portfel">Portfel</option>
                    <option value="mbank">Karta mbank</option>
                  </select>
                    </div>
                  </div> 
                   <div className="form-group row">
                    <label className="col-md-4 form-control-label">Transaction date</label>
                    <div className="col-md-8">
                          <DatePicker selected={this.state.date}
                    onChange={this.handleDateChange.bind(this)} />
                    </div>
                  </div> 
                <div className="form-group row">
                    <label className="col-md-4 form-control-label">Notes</label>
                    <div className="col-md-8">
                          <input type="text" className="form-control" name="notes" onChange={this.handleInputChange.bind(this)} value={this.state.notes} />
                    </div>
                  </div> 
                                    
                    </form>
                </ModalBody>
                <ModalFooter>
                                      <Button color="primary" onClick={this.handleOKClick.bind(this)}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.handleCancelClick.bind(this)}>Cancel</Button>
                </ModalFooter>
            </Modal>
      )
    }
  }
}
