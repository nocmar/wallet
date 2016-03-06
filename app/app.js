import React from "react";
import ReactDOM from "react-dom";

var Hello = React.createClass({  displayName: "Hello",
  render: function () {
    return React.createElement("div", null, "Hello", this.props.name);
  }
});

ReactDOM.render(<Hello name="Marta" />,  document.getElementById('app'));
