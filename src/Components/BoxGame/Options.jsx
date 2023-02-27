import React from "react";
import "./BoxGame.scss"
import Option from "./Option";

const Options = ({setGameState}) =>{
  return(
    <div className="boxOptions">
      <Option value="PIEDRA" setGameState={setGameState}/>
      <Option value="PAPEL" setGameState={setGameState}/>
      <Option value="TIJERA" setGameState={setGameState}/>
    </div>
  )
}
export default Options;