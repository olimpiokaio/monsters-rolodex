import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({monsters: response}));
  }

  handlerChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const searchMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox 
          pleaceholder='search monsters'
          handlerChange={this.handlerChange} />

        <CardList monsters={searchMonsters} />
      </div>
    )
  };
}

export default App;
