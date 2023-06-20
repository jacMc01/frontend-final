import React from "react";
import {Link} from "react-router-dom";
const Main = () => {
  return (
    <>
      <section className="main">
        <div className="main__container">
          <h1 className="main__title">Una api buscadora de Pokemones, encuentra al que mas te guste y ve sus atributos.</h1>
          <p className="main__text">En esta plataforma, podrás encontrar más de 1200 de tus pokémon favoritos, todos reunidos en un solo sitio para que puedas buscarlos fácilmente.</p>
          <button className="main__button">
            <ul className="main__app"><Link to={"/app"} className="main__link">App</Link></ul>
          </button>
        </div>
        <div className="main__container-image">
          <img src="/images/main__logo.png" alt="a pikachu" className="main__image"/>
        </div>
      </section>
    </>
  )
}

export default Main;
