import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      { name: 'Alex' }
    ]
  };

  setPersonName = (newName) => {
    this.setState({
      person: [
        { name: newName }
      ]
    })
  };

  changeName = (event) => {
    this.setState({
      person: [
        { name: event.target.value }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h3>React app</h3>
        <button onClick={ this.setPersonName.bind(this, 'New name from button') }>Button</button>
        <Person
          name={ this.state.person[0].name }
          click={ this.setPersonName.bind(this, 'New name from component') }
          changed={ this.changeName }
         />
      </div>
    );
  }
}

export default App;
