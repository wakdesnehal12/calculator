import React, { Component } from 'react'

export default class CompC extends Component {
  render() {
    return (
      <div>
          <h3>Guest Comp</h3>
          <h4>{this.props.value}</h4>
      </div>
    )
  }
}
