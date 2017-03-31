import React from "react";
import Nav from "./nav";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
   
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
    
        </div>

      </div>

    );
  }
}
