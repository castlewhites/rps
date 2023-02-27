import React from "react";
import "./BoxGame.scss"


const Option = ({value, gameState, setGameState, playerOption}) =>{

  const buttonCLick = () =>{
    setGameState({...gameState, playerOption: value, })
  }

  return(
    <button className="btnOption" onClick={buttonCLick}>{value}</button>
  )
}
export default Option;