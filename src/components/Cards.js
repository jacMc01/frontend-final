import React from 'react';
import Card from "./Card";
const Cards = (props) => {

  const pokemonData = props.pokemonData;

  return (
    <>
      <section className="cards">
        <p className="cards__bg"></p>
        <div className="cards__container">
        {/*{console.log("ok")}*/}
        {pokemonData.map((pokemon) => {
          // <Card props={pokemon}>
          // </Card>
          // console.log(pokemon)
          return <Card key={pokemon.id} name={pokemon.name} types={pokemon.types} image={pokemon.image}/>
        })}
        </div>
      </section>
    </>
  )
}

export default Cards;
