import "./App.css";
import Card from "./conponents/Card";
import React, { useState, useEffect } from "react";
import emoji from "./emoji.json";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = emoji.filter((emoji) =>
      emoji.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  const copy = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert(`${e.target.innerText} is copied`);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>👉Emoji Search👈</h1>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Emoji 😊"
        />
      </div>
      <div className="card-container" onClick={copy}>
        {data.map((item) => (
          <Card key={item.codes} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
