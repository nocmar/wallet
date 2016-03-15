import React from "react";

export default class First extends React.Component {
constructor(){
  super();
   this.state = {date: 5};
}
  render(){
    setInterval(()=> {
      this.setState({date: this.state.date+1});
    },6000)
        return (
            <div>
              {this.state.date}
            </div>
        );
    }
}
