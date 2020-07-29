import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.comonent.jsx';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:""
    }
  }
  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
  const { monsters, searchField} = this.state;
  const fileteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return(
        <div className="App">
          <input type='search' placeholder='Wyszukaj tutaj' 
            onChange={ e => {this.setState({searchField: e.target.value});
            }}
            >
          </input>
          <CardList monsters={fileteredMonsters}> 
          </CardList>
        </div>
      )
    }

  }

export default App;
