import "./App.css";

import React, { Component } from "react";

import Feedback from "./components/Feedback";

export default class App extends Component {
  render() {
    return (
      // className='w-[100vw] h-[100vh]  overflow-y-auto'
      <div style={{ overflowY: "auto", width: "100vw", height: "100vh" }}>
        <Feedback></Feedback>
      </div>
    );
  }
}
