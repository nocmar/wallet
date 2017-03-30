import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard <span className="badge badge-info">NEW</span></Link>
            </li>
             <li className="nav-item">
              <Link to={'/expenses'} className="nav-link" activeClassName="active"><i className="icon-wallet"></i>Expenses</Link>
            </li>
            <li className="nav-item">
              <Link to={'/budgets'} className="nav-link" activeClassName="active"><i className="icon-calculator"></i>Budgets</Link>
            </li>
            <li className="nav-item">
              <Link to={'/charts'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Reports</Link>
            </li>
            <li className="divider"></li>
             <li className={this.activeRoute("/components")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="options-vertical"></i> Settings</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/accounts'} className="nav-link" activeClassName="active"><i className="icon-wallet"></i> Accounts</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/social-buttons'} className="nav-link" activeClassName="active"><i className="icon-list"></i> Categories</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/cards'} className="nav-link" activeClassName="active"><i className="icon-options"></i> Preferences</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
