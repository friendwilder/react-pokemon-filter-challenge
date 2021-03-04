import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  /**
   * Input state management logic here
   */
  const [query, updateQuery] = useState("");

  const showPokemons =
    query === ""
      ? pokemons
      : pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(query.toLowerCase())
        );

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
      <p>{query}</p>
      <div className="cards">
        {/**
        Filter pokemons data and map them to return an array of CardItems.
         */}

        {showPokemons.map((pokemon) => (
          <li key={pokemon.name} className="pokemon-list-item">
            <CardItem name={pokemon.name} sprite={pokemon.sprite} />
          </li>
        ))}
      </div>
    </div>
  );
}
