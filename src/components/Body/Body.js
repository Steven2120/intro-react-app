import React, { Component } from "react";
import "./Body.css";
import Box from "../Box/Box";
import image from "./images/kenji.jpeg";
import shiba1 from "./images/1.jpeg";
import shiba2 from "./images/2.jpeg";
import shiba3 from "./images/3.jpeg";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <h1 className="body-title">Body</h1>
        <img className="kenji" src={image} alt="shibainu"></img>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div style={{ display: "flex" }}>
          <Box name="shiba-1" shiba={shiba1} />
          <Box name="shiba-2" shiba={shiba2} />
          <Box name="shiba-3" shiba={shiba3} />
        </div>
      </div>
    );
  }
}

export default Body;
