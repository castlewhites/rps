import React from "react";
import { Link } from "react-router-dom";
import pareja2 from "../../assets/pareja2.png";
import "./Main.scss"


function Main() {

  return (
    <div className="landing">
      <section className="landing-section">
        <div className="landing-section-circle"></div>
        <header>
          <Link to="/" className="landing-logo">¿Te interesa?</Link>
          <ul className="landing-navBar">
            <li><Link to="/Login" className="landing-navBar-link">Ingresar</Link></li>
          </ul>
        </header>
        <div className="landing-content">
          <div className="title-box">
            <h2>QUIERO CONSTRUIR<br /></h2>
            <h2>MI <span>VIDA</span></h2>
            <p>JUNTO A TI, ¿ACEPTAS?</p>
            <Link className="link-button" to="/Login">ACEPTO</Link>
          </div>
          <div className="landing-img">
            <img src={pareja2} />
          </div>
        </div>
        <p className="since">&copy; DESDE 19-02-2022</p>
      </section>
    </div>

  );
}

export default Main;