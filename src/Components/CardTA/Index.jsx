import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import ejemplo from "../../assets/foto.png"

const CardTA = ({ aciertos }) => {

  return (
    <>
      <div className="absolute">
        <div className={aciertos === 8 ? "the-card flipped" : "the-card"}>
          <div className="the-front">
            <img className="imgMsg" src={ejemplo} />
          </div>
          <div className="the-back">
            <h2 className="titleMsg">POR SUPUESTO...</h2>
            <p className="pMsg">Por supuesto que lo hago, no hay una manera de negarlo aunque quiera.
              Te amo cuando nos reímos sin parar, cuando nos tomamos de la mano y
              la mía está de frente, cuando hacemos videollamadas y vemos alguna peli,
              te amo cuando te tengo en mi pecho, te amo cuando salimos a cenar,
              cuando hablamos de cosas importantes; también te amo cuando no hay de qué hablar
              y la vida nos aburre, te amo cuando tú me aburres.
              Te amo incluso en la distancia
              aunqué juré mil veces que así no sería, te amo cuando siento que no lo haces, o cuando no quiero ver a nadie,
              te amo cuando crees que no lo hago, te amo.

            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default CardTA;