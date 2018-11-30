import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>React app</h3>
        <Person name="Alex"/>
      </div>
    );
  }
}

export default App;
