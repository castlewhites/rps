import React from "react";
import "./BoxGame.scss"
import Options from "./Options";


const BoxGame = ({ guide, playerOption, botOption, gameState, setGameState }) => {


  return (
    <>
        <div className="boxGuide">
          <span>{guide}</span>
        </div>
        <div className="boxDuel">
          <div className="definitiveOption" > {playerOption} </div>
          <div className="vs">VS</div>
          <div className="definitiveOption"> {botOption} </div>
        </div>

        <Options
          gameState={gameState}
          setGameState={setGameState} />

    </>
  )
}
export default BoxGame;