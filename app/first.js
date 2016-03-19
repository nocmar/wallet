import React from "react";
import Panel from 'react-bootstrap/lib/Panel';

export default class First extends React.Component {
constructor(){
  super();
   this.state = {title: "Panel title"};
}

  render(){
        return (
          <Panel header={this.state.title} bsStyle="info">
        Panel content
      </Panel>
        );
    }
}
