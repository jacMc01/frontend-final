import React, {useEffect, useState} from "react";
import Search from "./Search";
import Cards from "./Cards";

const Aplication = () => {

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getAllPokemonInfo = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
      const response = await fetch(url);
      const data = await response.json();

      const pokemonArray = [];
      const batchSize = 50;
      const totalBatches = Math.ceil(data.results.length / batchSize);

      for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
        const start = batchIndex * batchSize;
        const end = start + batchSize;
        const batch = data.results.slice(start, end);

        const batchPromises = batch.map((pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
              const pokemonInfo = {
                name: pokemonData.name,
                types: pokemonData.types.map((type) => type.type.name),
                image: null,
                id: pokemonData.id
              };

              if (pokemonData.sprites.other.dream_world.front_default) {
                pokemonInfo.image = pokemonData.sprites.other.dream_world.front_default;
              } else if (pokemonData.sprites.other["official-artwork"].front_default) {
                pokemonInfo.image = pokemonData.sprites.other["official-artwork"].front_default;
              }

              pokemonArray.push(pokemonInfo);
            });
        });

        await Promise.all(batchPromises);

        // Introduce a delay between batches (e.g., 1 second)
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      return pokemonArray;
    };

    const pokemonArray = JSON.parse(localStorage.getItem("pokemonArray"));

    if (pokemonArray) {
      setPokemonData(pokemonArray);
    } else {
      getAllPokemonInfo().then((pokemonArray) => {
        setPokemonData(pokemonArray);
        localStorage.setItem("pokemonArray", JSON.stringify(pokemonArray));
        console.log("Saved in localstorage")
      }).catch((error) => {
        console.log(error);
      });
    }
  }, []);


  return (
    <>
      <section className="aplication">
        <div className="aplication__info">
          <h2 className="aplication__title">APLICACIÓN WEB</h2>
          <p className="aplication__text">Aquí puedes buscar los tipos de pokemones que existen y tendrás información de su nombre, descripción e imagen.
          </p>
        </div>
        <div className="aplication__images">
          <div className="aplication__container">
            <img src="/images/aplication__image_1.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Acero</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_2.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Agua</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_3.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Bicho</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_4.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Dragón</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_5.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Electrico</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_6.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Fantasma</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_7.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Fuego</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_8.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Hada</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_9.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Hielo</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_10.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Lucha</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_11.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Normal</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_12.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Planta</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_13.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Psíquico</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_14.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Roca</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_15.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Siniestro</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_16.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Tierra</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_17.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Veneno</p>
          </div>
          <div className="aplication__container">
            <img src="/images/aplication__image_18.png" alt="" className="aplication__image"/>
            <p className="aplication__description">Volador</p>
          </div>
        </div>
      </section>
      <Search pokemonData={pokemonData}/>

    </>
  )
}

export default Aplication;
