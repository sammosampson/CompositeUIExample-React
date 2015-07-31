import './style.css!';
import React from 'react';
export default class Component extends React.component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
