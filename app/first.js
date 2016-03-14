import React from "react";

export default React.createClass({

  render: function() {
        return (
        <ul>
            {this.props.list.map(function(listValue){
              return <li>{listValue}</li>;
            })}
          </ul>

        )
    },
});
