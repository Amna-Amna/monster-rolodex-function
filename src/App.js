import { useState , useEffect} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/seach-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)
  console.log('render');

  useEffect(()=>{
    console.log('effect fired');
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => setMonsters(users));
  }, []);

  useEffect(() =>{
      const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField])


  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
