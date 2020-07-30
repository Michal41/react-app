import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.comonent.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx'
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
  handleChange = (e) =>{this.setState({searchField: e.target.value})
  };
  render(){
  const { monsters, searchField} = this.state;
  const fileteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return(
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox handleChange={this.handleChange}
          placecholder='Wyszukaj tutaj'
          />
          <CardList monsters={fileteredMonsters}/> 
          
        </div>
      )
    }

  }

export default App;
