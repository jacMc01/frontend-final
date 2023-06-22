import React from "react";

const Box = () => {
  return (
    <>
      <section className="box">
        <h1 className="box__title">No importa de que categoría sean, puedes encontrar cualquiera.</h1>
        <div className="box__container">
          <div className="box__container-card">
            <img src="/images/box__image_1.png" alt="pokemon Charmeleon" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Charmander</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_2.png" alt="pokemon Voltorb" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Voltorb</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_3.png" alt="pokemon Sandshrew" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Sandshrew</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_4.png" alt="pokemon Exeggutor" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Exeggutor</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_5.png" alt="pokemon Omanyte" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Omanyte</h3>
          </div>
          <div className="box__container-card">
            <img src="/images/box__image_6.png" alt="pokemon Snorlax" className="box__container-card-image"/>
            <h3 className="box__container-card-title">Snorlax</h3>
          </div>

        </div>
      </section>
    </>
  )
}

export default Box;
