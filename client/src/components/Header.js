import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#">Budget</a>
          </li>
         </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">5</span></a>
          </li>
           <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-cloud-upload"></i></a>
          </li>
           <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-magnifier-add"></i></a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <img src={'img/avatars/marta.jpg'} className="img-avatar" alt="martanocon@gmail.com"/>
                <span className="hidden-md-down">Marta</span>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center"><strong>Account</strong></DropdownItem>

                <DropdownItem><i className="fa fa-bell-o"></i> Updates<span className="badge badge-info">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-envelope-o"></i> Messages<span className="badge badge-success">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-tasks"></i> Tasks<span className="badge badge-danger">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-comments"></i> Comments<span className="badge badge-warning">42</span></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
                <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
          </ul>
      </header>
    )
  }
}

export default Header;
