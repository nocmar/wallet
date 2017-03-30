import React from "react";
import Nav from "./nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
      return (
       <div>
              {this.props.children}

       </div>

    );
  }
}
