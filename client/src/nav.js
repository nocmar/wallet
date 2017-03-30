import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const expensesClass = location.pathname === "/" ? "active" : "";
    const budgetsClass = location.pathname.match(/^\/budgets/) ? "active" : "";
    const accountsClass = location.pathname.match(/^\/accounts/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={expensesClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Wydatki</IndexLink>
              </li>
              <li className={budgetsClass}>
                <Link to="budgets" onClick={this.toggleCollapse.bind(this)}>Budzety</Link>
              </li>
              <li className={accountsClass}>
                <Link to="accounts" onClick={this.toggleCollapse.bind(this)}>Konta</Link>
              </li>
               <li className={accountsClass}>
                <Link to="dashboard" onClick={this.toggleCollapse.bind(this)}>Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
