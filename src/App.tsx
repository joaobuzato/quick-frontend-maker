import React, { useState } from "react";

import "./App.css";
import EntityList from "./components/EntityList";
import Entity from "./components/Entity";

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
      <>
        <h1>{url}</h1>
        {Array.isArray(items) ? (
          <EntityList dataList={items} />
        ) : (
          <Entity data={items} />
        )}
      </>
    );
  };

  const closeTable = () => {
    setTable(<></>);
    setIsTableOpen(false);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlValue(event.currentTarget.value);
  };

  return (
    <div className="App">
      {isTableOpen ? (
        <>{table}</>
      ) : (
        <>
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
          <button onClick={closeTable}>Voltar ao início</button>
        </>
      )}
    </div>
  );
}

export default App;
