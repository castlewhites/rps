import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Index";
import "../Teamo/Teamo.scss"

import CardHG from "../../Components/CardHG/Index";



function TeInteresa() {
  const palabras = ["hermosa", "princesa", "mia", "brillante"];
  const [win, setWin] = useState(0);
  


  const [palabra, setPalabra] = useState(palabras[Math.floor(Math.random() * palabras.length)].toUpperCase());
  const [intentos, setIntentos] = useState(6);
  const [letrasAdivinadas, setLetrasAdivinadas] = useState([]);

  useEffect(() => {
    const letrasCorrectas = letrasAdivinadas.filter(letra => palabra.includes(letra));
    if (letrasCorrectas.length === palabra.length) {
      setWin(1)
    }
  }, [letrasAdivinadas, palabra]);

  const manejarIntento = (letra) => {
    if (!letrasAdivinadas.includes(letra)) {
      setLetrasAdivinadas([...letrasAdivinadas, letra]);
      if (!palabra.includes(letra)) {
        setIntentos(intentos - 1);
      }
    }
  };
  const Reset = () => {
    window.location.reload()

  }
  console.log(win);

  return (
    <>
      <Header />
      <div className="main-container">
        <div>
          <div className="memory-text">
            <h1 className="memory-title">¿ESTÁS SEGURA?</h1>
          </div>
          <div className="cards-container">
            <div className="">
              <div className="boxGuideA">
                <span>AHORCADO</span>
              </div>
              <div className="container-word">
                {palabra.toUpperCase().split("").map((letra, index) => (
                  <span className="letters" key={index}>
                    {letrasAdivinadas.includes(letra) ? letra : <span className="line-letter">__ </span> }
                  </span>
                ))}
              </div>
              <div className="container-hanged-btn">
                {intentos > 0 ? (
                  "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map((letra, index) => (
                    <button className="hanged-letters" key={index} onClick={() => manejarIntento(letra)}>
                      {letra}
                    </button>
                  ))
                ) : (
                  <>
                    <h2>¡HAS PERDIDO!</h2>
                    <p className="note">LA PALABRA ERA: <span>{palabra}</span></p>
                    <button className="reset-btn" onClick={Reset} >Reset</button>
                  </>

                )}
              </div>
            </div>


            <div className="informacion">
              <h2 id="aciertos" className="estadisticas">Intentos restantes: {intentos}</h2>
              <h2 id="movimientos" className="estadisticas">Letras usadas: {letrasAdivinadas.join(", ")}</h2>
            </div>
          </div>
        </div>
        <div className="sorpresa">
          <CardHG
            aciertos={win}
            title="POR SUPUESTO..."
          />
        </div>


      </div>
    </>
  );
}

export default TeInteresa;