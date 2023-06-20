import React from "react";

const Information = () => {
  return (
    <>
      <section className="information">
        <div className="information__title-container">
          <h3 className="information__title">Los mejores pokemones de tu infancia en una sola página.</h3>
        </div>
        <div className="information__container-images">
          <img src="/images/information__image_1.png" alt="" className="information__image"/>
          <img src="/images/information__image_2.png" alt="" className="information__image"/>
          <img src="/images/information__image_3.png" alt="" className="information__image"/>
          <img src="/images/information__image_4.png" alt="" className="information__image"/>
          <img src="/images/information__image_5.png" alt="" className="information__image"/>
          <img src="/images/information__image_6.png" alt="" className="information__image"/>
        </div>
      </section>
    </>
  )
}

export default Information;
