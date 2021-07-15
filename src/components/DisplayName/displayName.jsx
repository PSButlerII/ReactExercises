import React, { Component } from 'react';

class DisplayName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'Reggie',
        lastName: 'White'
     }
  }
  render() {
    return (
      <div>
        <h1>First Name: {this.state.firstName}</h1>
        <h1>Last Name: {this.state.lastName}</h1>
        
      </div>
    );
  }
}
export default DisplayName;