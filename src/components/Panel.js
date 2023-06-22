import React from "react";

const Panel = () => {
  return (
    <>
      <section className="panel">
        <div className="panel__container">
          <div className="panel__left">
            <h4 className="panel__title">Pokémon</h4>
              <p className="panel__text">
              Los Pokémon se presentan en diversas formas y tamaños, y cada uno tiene habilidades y   características únicas. Hay diferentes especies de Pokémon, y se clasifican en diferentes tipos,  como agua, fuego, planta, eléctrico, entre otros. Cada tipo tiene fortalezas y debilidades   específicas en relación con otros tipos.
              </p>
          </div>
          <div className="panel__right">
            <h4 className="panel__title">Pueblo paleta</h4>
            <p className="panel__text">
              Pueblo Paleta es el lugar de inicio en los juegos de Pokémon en la región de Kanto, donde los jugadores eligen su primer Pokémon y comienzan su aventura. Es conocido por ser el hogar del Profesor Oak y la puerta de entrada al mundo Pokémon.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Panel;
