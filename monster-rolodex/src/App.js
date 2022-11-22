import { Component } from 'react'; // <- this is required by a Class component
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


// React uses funtions to return HTML
class App extends Component { // <- this is a Class component

  constructor() {
    super(); // <- call the constructor of the parent

    this.state = {
      // monster1: { name: 'Linda' },
      // monster2: { name: 'Frank' },
      // monster3: { name: 'Jonie' }

      // converted to array

      // monsters: [
      //   { id: '122sdf', name: 'Linda' },
      //   { id: '122sddf', name: 'Frank' },
      //   { id: '122sfff', name: 'Jonie' },
      //   { id: '122sdfga', name: 'Juice' },
      // ]

      // let's use an API
      monsters: [], // <- the values will come from an API
      searchField: ''
    };
    //console.log('constructor');

  }

  componentDidMount() { // <- put API calls in this function

    // whatever code in here runs after the component mounts.
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });

  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    // console.log('render');

    // Desconstruction
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // We keep track of the original list and we always do the filtering this original list.
    const filteredMonsters = monsters.filter((monster) => {            // filter() - return an array pf the filtered values
      return monster.name.toLocaleLowerCase().includes(searchField);   // includes() in now case insensitive.
    });

    return (
      <div className="App" >
        <SearchBox
          onChangeHandler={onSearchChange}
          className="monster-search-box"
          placeholder='Search Monsters'
        />

        <CardList monsters={filteredMonsters} />
      </div >
    )
  };

}

export default App;
