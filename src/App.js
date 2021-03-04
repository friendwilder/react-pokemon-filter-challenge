import React from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  /**
   * Input state management logic here
   */

  this.setState = {
    query: ""
  };

  function updateQuery(query) {
    setState(() => ({
      query: query.trim()
    }));
  }

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {/**
       Insert here the input tag
       **/}
      <input
        type="text"
        placeholder="Input your query"
        onChange={(event) => updateQuery(event.target.value)}
      ></input>
      <div className="cards">
        {/**
        Filter pokemons data and map them to return an array of CardItems.
         */}
      </div>
    </div>
  );
}
