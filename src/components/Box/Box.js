import React, { Component } from "react";
import "./Box.css";
export class Box extends Component {
  render() {
    return (
      <div>
        <img src={this.props.shiba} alt={this.props.name} />
        <span>{this.props.name}</span>
      </div>
    );
  }
}
export default Box;
