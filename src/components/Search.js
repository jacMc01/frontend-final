import {React, useState} from "react";
import Cards from "./Cards";
const Search = (props) => {
  const pokemonData = props.pokemonData;

  const [searchResults, setSearchResults] = useState([]);


  function filterPokemonByType(pokemonArray, type) {
    return pokemonArray.filter((pokemon) =>
      pokemon.types.includes(type.toLowerCase())
    );
  }

  function searchPokemonByName(pokemonArray, searchTerm) {
    const searchResults = pokemonArray.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return searchResults.map((pokemon) => pokemon);
  }

  const handleChange = (event) => {

    event.preventDefault()
    // console.log(event.target.value)
    const searchTerm = event.target.value;

    const searchResults = searchPokemonByName(pokemonData, searchTerm);
    setSearchResults(searchResults);

    // const pokemonNames = searchResults.map((pokemon) => pokemon.name);

    // console.log(pokemonNames)

  }


  return (
    <>
      <section className="search">
        <p className="search__text">Escribe el nombre del Pokemón:</p>
        <div className="search__container">
          <input onChange={handleChange} className="search__input" type="text" />
          <button className="search__button"><img src="/images/search__image.png" alt="poke ball search" className="search__image-button"/></button>
        </div>
      </section>

      <Cards pokemonData={searchResults}/>
    </>
  )
}

export default Search;
