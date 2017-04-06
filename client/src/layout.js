import React from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
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
