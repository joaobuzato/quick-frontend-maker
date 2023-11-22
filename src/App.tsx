import React, { useState } from "react";

import "./App.css";
import EntityList from "./components/EntityList";
import Entity from "./components/Entity";
import logo from "./logo-q.png"

function App() {
  const [table, setTable] = useState(<></>);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [urlValue, setUrlValue] = useState("");

  const getFromServer = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();

    getFromServer(urlValue)
      .then((response) => {
        openTable(urlValue, response);
      })
      .catch(() => {
        alert("deu merda");
      });
  };

  const openTable = (url: string, items: any) => {
    setIsTableOpen(true);
    setTable(
      <div className="container">
        <h1>{url}</h1>
        {Array.isArray(items) ? (
          <EntityList dataList={items} />
        ) : (
          <Entity data={items} />
        )}
      </div>
    );
  };


  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlValue(event.currentTarget.value);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
      </header>
      {isTableOpen ? (
        <>
          {table}
          <button onClick={closeTable}>Voltar ao início</button>
        </>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            placeholder="url"
            id="url"
            type="text"
            value={urlValue}
            onChange={changeHandler}
          ></input>
          <button type="submit">Fazer Chamada</button>
        </form>
      )}
    </div>
  );
}

export default App;
