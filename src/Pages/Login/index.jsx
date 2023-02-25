import React, { useState } from "react";
import "./Login.scss"


function Login() {

  const [userError, setUserError] = useState("");


  function validation(){
    const user = document.getElementById("usuario").value
    const pass = document.getElementById("contraseña").value


    if(user=== "_About_us_s" && pass === "190222"){
      window.location="Inicio"
    }
    else{
      setUserError("Escribe bien mi amor")
    }
  }

  const validationUser = {
    width: '100%',
    color: '#8d4925',
    fontSize: '14px',
    marginTop: '7px',
    marginLeft: "7px",
    display: "block"
}

  return (
    <div className="container">
      <div className="container-login">
        <form>
          <h2>XIX</h2>
          <div className="inputBox" >
            <input type="text" placeholder="Usuario" id="usuario" />
          </div>
          <div className="inputBox" >
            <input type="password" placeholder="*****" id="contraseña" />
          </div>
          <div style={validationUser}> {userError}</div>
          <div className="inputBox button" >
            <input type="button" value="login" onClick={validation} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
