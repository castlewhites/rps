import React, { useState, useEffect } from "react";
import ejemplo from "../../assets/foto.png"

import "../Cards/Cards.scss"

const CardPPT = ({ aciertos }) => {

  return (
    <>
        <div className={aciertos === 1 ? "theCardPpt flipped" : "theCardPpt"}>
          <div className="theFrontPpt">
            <img className="imgMsg" src={ejemplo} />
          </div>
          <div className="the-back">
            <h2 className="titleMsg">NO LO SÉ.</h2>
            <p className="pMsg">
              Quisiera darte una respuesta precisa pero realmente no la tengo, pero estoy en el proceso de descubirla;
              no puedo decirte si soy 100% feliz o no pero si perfectamente en qué momentos lo soy.
              Lo soy cuando sonries y te sonrojas porque te estoy mirando, cuando caminamos de la mano y 
              corres a subirte en algún muro para que te cargue, cuando degustas una buena comida y haces el baile de la felicidad,
              cuando hablamos de nosotros en las noches de vinito, cuando cocinamos, soy feliz cuando te abrazo, cuando te siento muy cerca,
              soy feliz hoy que pienso en ti. Si, contigo soy feliz.
            </p>
          </div>
        </div>
    </>
  )
}
export default CardPPT;