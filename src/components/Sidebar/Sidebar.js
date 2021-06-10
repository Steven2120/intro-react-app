import React, { Component } from "react";
import "./Sidebar.css";
export class Sidebar extends Component {
  state = {
    colorArray: ["Blue", "Yellow", "Red"],
    backgroundColorInput: "",
  };
  handleOnBackgroundColorChange = (color) => {
    console.log(color);
    this.setState({
      backgroundColorInput: color,
    });
  };
  render() {
    return (
      <div
        className="sidebar"
        style={{ backgroundColor: this.state.backgroundColorInput }}
      >
        <ul>
          {this.state.colorArray.map((item, index) => {
            return (
              <li
                className="list-style"
                key={index}
                onClick={() => this.handleOnBackgroundColorChange(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Sidebar;
