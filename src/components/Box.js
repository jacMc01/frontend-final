import React from "react";

const Box = () => {
  return (
    <>
      <section className="box">
        <h1 className="box__title">No importa de que categoría sean, puedes encontrar cualquiera.</h1>
        <div className="box__container">
          <div className="box__container-card">
            <img src="/images/box__image_1.png" alt="a pokemon" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Squirtle</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_2.png" alt="a pokemon" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Squirtle</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_3.png" alt="a pokemon" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Squirtle</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_4.png" alt="a pokemon" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Squirtle</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_5.png" alt="a pokemon" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Squirtle</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_6.png" alt="a pokemon" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Squirtle</h3>
          </div>

        </div>
      </section>
    </>
  )
}

export default Box;
