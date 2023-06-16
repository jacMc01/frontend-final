import React from "react";

const Description = () => {
  return (
    <>
      <section className="description">
        <div className="description__container">
          <h1 className="description__title">Una pokebola</h1>
          <p className="description__text">Una Pokébola es un dispositivo esférico utilizado en el mundo de Pokémon para capturar, almacenar y transportar a los Pokémon. Los entrenadores Pokémon las utilizan para atrapar a estas criaturas durante las batallas y entrenamientos.</p>
          <img src="/images/description__image.png" alt="a pokeball" className="description__image"/>
        </div>
      </section>
      <p className="description__bg"></p>
    </>
  )
}

export default Description;
