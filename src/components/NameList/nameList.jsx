import React, { Component } from 'react';

class DisplayName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
     }
  }
  render() {
    return (
      <div>
        <h1>Name List: {this.state.names}</h1>
        
        
      </div>
    );
  }
}
export default DisplayName;