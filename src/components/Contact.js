import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <p className="contact__bg"></p>
        <div className="contact__container">
          <div className="contact__info">
            <h4 className="contact__title">Pókemon</h4>
            <p className="contact__text">El mejor amigo...</p>
          </div>
          <div className="contact__data">
            <div className="contact__data-container">
              <p className="contact__data-title">Contacto</p>
              <p className="contact__data-address">Carmen, Campeche</p>
              <p className="contact__data-phone">126449797</p>
            </div>
            <div className="contact__data-container">
              <p className="contact__data-title">Correo electrónico</p>
              <p className="contact__data-email">macky@yandex.com</p>
              <p className="contact__data-email">macky_design@some.com</p>
            </div>
            <div className="contact__data-container">
              <img className="contact__data-linkedin" src="/images/contact__data-linkedin.svg"/>
              <img className="contact__data-facebook" src="/images/contact__data-facebook.svg"/>
              <img className="contact__data-twitter" src="/images/contact__data-twitter.svg"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
