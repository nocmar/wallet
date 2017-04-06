import React from "react";
import Modal from 'react-modal';

class SplitedExpenseRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    handleCategoryChange(e) {
        this.props.updateCategory(this.props.index, e.target.value);
    }
    handleAmountChange(e) {
        this.props.updateAmount(this.props.index, e.target.value);
    }
    render() {
        return (
            <div className="form-group row">
                <div className="col-md-6 ">
                    <select  value={this.props.category} onChange={this.handleCategoryChange} className="form-control" size="1">
                        <option value=''>Wybierz...</option>
                        <option value="Spożywcze">Spożywcze</option>
                        <option value="Alkohol">Alkohol</option>
                        <option value="Samochód">Samochód</option>
                        <option value="Transport">Transport</option>
                        <option value="Mieszkanie">Mieszkanie</option>
                    </select>
                </div>
                <div className="col-md-6">
               <input type="number" className="form-control" value={this.props.amount} onChange={this.handleAmountChange} />
                </div>
            </div>
       );
    }
}
export default SplitedExpenseRow;