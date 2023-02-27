import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.scss"

import Header from "../../Components/Header/Index";
import foto from "../../assets/COMERCIOS.svg"
import pareja from "../../assets/pareja.png"
import pareja2 from "../../assets/pareja2.png"
import pareja3 from "../../assets/pareja3.jpg"




function Inicio() {

  return (
    <>
      <Header />
      <div className="main">
        < div className="main-container">
          <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
              <img src={pareja} />
            </div>
            <div className="content">
              <div className="details">
                <h2>¿Te amo?</h2>
                <p className="pMain">Es una de las preguntas que me haces con más frecuencia. Espero que pueda aclarar la duda.. </p>
                <Link className="linkCard" to="/TeAmo"> Ver más</Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
              <img src={pareja2} />
            </div>
            <div className="content">
              <div className="details">
                <h2>Felicidad...</h2>
                <p className="pMain">¿Soy feliz? <br /> Quisiera compartir contigo lo que pienso al respecto. </p>
                <Link className="linkCard" to="/Felicidad"> Ver más</Link>
              </div>

            </div>
          </div>
          <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
              <img src={pareja3} />
            </div>
            <div className="content">
              <div className="details">
                <h2>¿Te interesa?</h2>
                <p className="pMain">Realmente espero que te guste mi propuesta, es exclusiva para ti. <br /> Espero tu respuesta...</p>
                <Link className="linkCard" to="/Te-interesa?"> Ver más</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
