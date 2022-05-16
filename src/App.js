import React, { useEffect, useState } from "react";
import CardList from "./components/CardList.js/CardList";
import Search from "./components/Search/Search";

function App() {
  const [monsterInfo, setMonsterInfo] = useState({
    monsters: [],
  });

  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMonsterInfo({ monsters: data });
      });
  }, []);

  const { monsters } = monsterInfo;

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search
        placeholder="Search Monsters..."
        handleChange={(e) => {
          setSearchField(e.target.value);
        }}
      />
      <CardList monsterInfo={filteredMonsters} />
    </div>
  );
}

export default App;
