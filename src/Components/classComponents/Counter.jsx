import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={this.decrement}>Decrement</button>
          <h2>{this.state.count}</h2>
          <button onClick={this.increment}>Increment</button>
        </div>
      </>
    );
  }
}
