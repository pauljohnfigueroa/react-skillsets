import { Component } from 'react'; // <- this is required by a Class component
import logo from './logo.svg';
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
      monsters: [] // <- the values will come from an API
    };
    console.log('constructor');

  }

  componentDidMount() { // <- put API calls in this function

    // whatever code in here runs after the component mounts.
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        },
          () => {
            console.log(this.state);
          });
      });

  }

  render() {
    console.log('render');
    return (
      <div className="App" >
        <input
          className="search-box"
          type="search"
          placeholder='Search monsters'
          onChange={(event) => {

            console.log(event.target.value);

            const filteredMonsters = this.state.monsters.filter((monster) => { // filter() - return an array pf the filtered values
              let searchString = event.target.value.toLocaleLowerCase();
              return monster.name.toLocaleLowerCase().includes(searchString); // includes() in now case insensitive.
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            });

          }}
        />
        {
          this.state.monsters.map((monster) => { // map() - do this operation on each item in the array
            return <div key={monster.id}><h2>{monster.name}</h2></div>
          })
        }
      </div >
    )
  };

}

export default App;
