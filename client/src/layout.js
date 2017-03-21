import React from "react";
import Nav from "./nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Nav location={location} />

        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              <h1>Kontroler wydatków</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
