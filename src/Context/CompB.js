import React, { Component } from 'react';
import CompC from './CompC';

export default class CompB extends Component {
  render() {
    return (
      <div>
          <h3>User Comp</h3>
          <h4><CompC nm={this.props.value}/></h4>
      </div>
    )
  }
}
