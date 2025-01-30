import React, { Component } from 'react';

// Define the state type
interface CounterState {
  count: number; 
}

// Define the Counter component, specifying empty props and the correct state type
class Counter extends Component<{}, CounterState> {
  // Define the initial state
  state: CounterState = {
    count: 0
  };

  // Increment method to update the count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render function
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
