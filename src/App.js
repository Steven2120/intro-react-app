import React, { Component } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Box from "./components/Box/Box";
import Sidebar from "./components/Sidebar/Sidebar";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Body />
        </div>
        <Box />
        <Footer />
      </div>
    );
  }
}

export default App;
