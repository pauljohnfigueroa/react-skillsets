// import { Component } from 'react'; // <- this is required by a Class component.
import { useState, useEffect } from 'react'; // <- useState hook used by functional components
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  console.log('render');

  const [searchField, setSearchField] = useState(''); // <- useState gives us 2 values, [value, setValue]
  // initialize the searchField to an empty '' string
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilferedMonsters] = useState(monsters);

  // useEffect() is a type of Javascript function side effect.
  // Similar to componentDidMount and componentDidUpdate:
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); // <- we do not want to put dependencies [] as we want this to run only when the App mounts.
  // a useEffect re-runs whenever a dependecy changes.
  // ^- return [cb, [deps]]

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {            // filter() - return an array pf the filtered values
      return monster.name.toLocaleLowerCase().includes(searchField);   // includes() in now case insensitive.
    });

    setFilferedMonsters(newfilteredMonsters);               // 4.) updates the filteredMonsters object
    console.log('newfilteredMonsters');

  }, [monsters, searchField]);                              // 3.) this useEffect will run whenever monsters or searchField changes

  console.log(searchField);

  const onSearchChange = (event) => {                       // 2.) Updates the searchField variable
    //console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();

    // this.setState(() => {
    //   return { searchField };
    // });

    // replace above with setSearchField setter function
    // this will update searchField
    setSearchField(searchFieldString);
  }

  return (
    <div className="App" >
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}                    // 1.) A user types a search string
        className="monster-search-box"
        placeholder='Search Monsters'
      />

      <CardList monsters={filteredMonsters} />            {/** 5.) Displays the filteredMonsters object */}
    </div >
  );
};

export default App;

// React uses funtions to return HTML
// class App extends Component { // <- this is a Class component

//   constructor() {
//     super(); // <- call the constructor of the parent

//     this.state = {
//       // monster1: { name: 'Linda' },
//       // monster2: { name: 'Frank' },
//       // monster3: { name: 'Jonie' }

//       // converted to array

//       // monsters: [
//       //   { id: '122sdf', name: 'Linda' },
//       //   { id: '122sddf', name: 'Frank' },
//       //   { id: '122sfff', name: 'Jonie' },
//       //   { id: '122sdfga', name: 'Juice' },
//       // ]

//       // let's use an API
//       monsters: [], // <- the values will come from an API
//       searchField: ''
//     };
//     //console.log('constructor');

//   }

//   componentDidMount() { // <- put API calls in this function

//     // whatever code in here runs after the component mounts.
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });

//   }
//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => { // ,- this is unique to class components, functional componets don't have this.
//       return { searchField };
//     });
//   }

//   render() {
//     // console.log('render');

//     // Desconstruction
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     // We keep track of the original list and we always do the filtering this original list.
//     const filteredMonsters = monsters.filter((monster) => {            // filter() - return an array pf the filtered values
//       return monster.name.toLocaleLowerCase().includes(searchField);   // includes() in now case insensitive.
//     });

//     return (
//       <div className="App" >
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           className="monster-search-box"
//           placeholder='Search Monsters'
//         />

//         <CardList monsters={filteredMonsters} />
//       </div >
//     )
//   };

// }

// export default App;