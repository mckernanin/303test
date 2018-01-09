import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person';
import './App.css';

class App extends Component {
  state = {
    people: [],
  };
  async componentWillMount() {
    const apiUrl =
      'http://www.filltext.com/?rows=100&fname=%7BfirstName%7D&lname=%7BlastName%7D&city=%7Bcity%7D&pretty=true';
    try {
      const people = await fetch(apiUrl);
      const peopleJson = await people.json();
      this.setState({ people: peopleJson });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {people.length === 0 && <p>Loading People...</p>}
        {people.length > 0 && (
          people.map(person => <Person key={`${person.fname}-${person.lname}`} person={person} />)
        )}
      </div>
    );
  }
}

export default App;
