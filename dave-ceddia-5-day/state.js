import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class Room extends React.Component {
  state = {
    isLit: false,
    temp: 22
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  lightOn = () => {
    this.setState({
      isLit: true
    });
  };

  lightOff = () => {
    this.setState({
      isLit: false
    });
  };

  incrementTemp = () => {
    this.setState({ temp: this.state.temp + 1 });
  };

  DecreaseTemp = () => {
    this.setState({ temp: this.state.temp -1 });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (
      <div className={`room ${brightness}`}>
        The room is {this.state.isLit ? "lit" : "dark"}
        <br />
        <button onClick={this.flipLight}>flip</button>
        <button onClick={this.lightOn}>On</button>
        <button onClick={this.lightOff}>Off</button>
        <p>The temperature is {this.state.temp}</p>
        <button onClick={this.incrementTemp}>+</button>
        <button onClick={this.DecreaseTemp}>-</button>
      </div>
    );
  }