import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="first">
        Hello, {this.props.name}!
      </div>
    );
  },
});
