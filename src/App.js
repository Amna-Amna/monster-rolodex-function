import { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/seach-box/search-box.component";
import "./App.css";



const App = ()=>{
  console.log('render')
  const [searchField,setSearchField] = useState('a')
  console.log(searchField)
  
  const onSearchChange =(event) => {
    console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  };

  return( 
  <div className="App">
  <h1 className="app-title">Monsters Rolodex</h1>
  <SearchBox
    className="monsters-search-box"
    onChangeHandler={onSearchChange}
    placeholder="search Monsters"
  />
  {/*
  <CardList monsters={filteredMonsters} /> */}
</div>
)
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchString = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchString };
//     });
//   };

//   render() {
//     console.log("render from App.js");
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search Monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

 export default App;
