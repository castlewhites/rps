import React, { useState, useEffect } from "react";
import ejemplo from "../../assets/foto.png"

const CardHG = ({ aciertos }) => {

  return (
    <>
      <div className="absolute">
        <div className={aciertos === 1 ? "the-card flipped" : "the-card"}>
          <div className="the-front">
            <img className="imgMsg" src={ejemplo} />
          </div>
          <div className="the-back">
            <h2 className="titleMsg">¿SI?</h2>
            <p className="pMsg">
              Quiero saber si te interesa compartir el resto de tu tiempo conmigo para seguir construyendo nuestro presente y nuestro futuro juntos,
              si te interesa seguir caminando de la mano conmigo y que te siga llenado la carita de besos, ¿Te interesa tener una familia conmigo?
              ¿Te interesa que sea yo al que veas cuando despiertes? Dime si te interesa y yo hago el resto.
              Más que interesarme, lo deseo y estoy dispuesto a hacer mi parte. Todos los días agradezco por tenerte en mi vida
               y por todas las cosas que me has enseñado, tengo super claro que quiero tenerte en mi vida pero dime si a ti te interesa.

            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default CardHG;