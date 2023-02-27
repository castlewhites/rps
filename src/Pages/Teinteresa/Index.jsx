import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Index";
import "../Teamo/Teamo.scss"

import CardTi from "../../Components/CardTA/Index";

let movimientos = 0;
let aciertos = 0;
let tiempo = false;



function TeInteresa() {
  const palabras = ["hola", "mundo", "react", "javascript"];


  const [palabra, setPalabra] = useState(palabras[Math.floor(Math.random() * palabras.length)]);
  const [intentos, setIntentos] = useState(6);
  const [letrasAdivinadas, setLetrasAdivinadas] = useState([]);

  const manejarIntento = (letra) => {
    if (!letrasAdivinadas.includes(letra)) {
      setLetrasAdivinadas([...letrasAdivinadas, letra]);
      if (!palabra.includes(letra)) {
        setIntentos(intentos - 1);
      }
    }
  };
  const Reset =() => {
    window.location.reload()

  }


  return (
    <>
      <Header />
      <div className="main-container">
        <div>
          <div className="memory-text">
            <h1 className="memory-title">¿LISTA PARA DESCUBRIRLO?</h1>
          </div>
          <div className="cards-container">
            <h1>Ahorcado</h1>
            <div>
              {palabra.split("").map((letra, index) => (
                <span key={index}>
                  {letrasAdivinadas.includes(letra) ? letra : "___ "}
                </span>
              ))}
            </div>
            <div>
              {intentos > 0 ? (
                "abcdefghijklmnopqrstuvwxyz".split("").map((letra, index) => (
                  <button key={index} onClick={() => manejarIntento(letra)}>
                    {letra}
                  </button>
                ))
              ) : (
                <>                
                  <p>Has perdido. La palabra era: {palabra}</p>
                  <button onClick={Reset} >Reset</button>
                </>

              )}
            </div>


            <div className="informacion">
              <h2 id="aciertos" className="estadisticas">Intentos restantes: {intentos}</h2>
              <h2 id="movimientos" className="estadisticas">Letras adivinadas: {letrasAdivinadas.join(", ")}</h2>
            </div>
          </div>
        </div>
        <div className="sorpresa">
          <CardTi
            aciertos={aciertos}
            title="POR SUPUESTO..."
          />
        </div>


      </div>
    </>
  );
}

export default TeInteresa;