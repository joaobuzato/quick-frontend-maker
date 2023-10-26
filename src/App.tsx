import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemTable from "./components/UI/ItemTable";
import { url } from "inspector";

function App() {
  const [items, setItems] = useState([]);

  const getFromServer = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
  };
  const url = "http://localhost:8080/actions";

  useEffect(() => {
    getFromServer(url).then((response) => {
      console.log(response);
      setItems(response);
    });
  }, []);

  return (
    <div className="App">
      <h1>{url}</h1>
      <ItemTable data={items}></ItemTable>
    </div>
  );
}

export default App;
