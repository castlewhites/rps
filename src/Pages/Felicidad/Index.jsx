import React, { useEffect, useState, useRef } from "react";
import "./Felicidad.scss"
import Header from "../../Components/Header/Index";
import BoxGame from "../../Components/BoxGame/Index";
import CardPpt from "../../Components/CardPPT/Index";
import botInt from "../../Functions/Botint"



let aciertos = 0
let movimientos = 0

function Felicidad() {



  const [gameState, setGameState] = useState({
    playerOption: null,
    botOption: null,
    guide: "piedra, papel o tijera"

  })

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    botInt(gameState, setGameState)
  }, [gameState.playerOption])

  useEffect(() => {
    if (isNaN(gameState.playerOption)) {
      GameLogic(gameState, setGameState)
    }

  }, [gameState.botOption])
  const GameLogic = (gameState, setGameState) => {

    const { playerOption, botOption } = gameState;

    const winPlayer = "MUY BIEN AMOR"
    const winBot = "CHALE"


    if (playerOption === "PIEDRA" && botOption === "TIJERA") {
      setGameState({ ...gameState, guide: winPlayer })
      aciertos = aciertos + 1
      movimientos = movimientos + 1
    }
    else if (playerOption === "PAPEL" && botOption === "PIEDRA") {
      setGameState({ ...gameState, guide: winPlayer })
      aciertos = aciertos + 1
      movimientos = movimientos + 1


    }
    else if (playerOption === "TIJERA" && botOption === "PAPEL") {
      setGameState({ ...gameState, guide: winPlayer })
      aciertos = aciertos + 1
      movimientos = movimientos + 1

    }
    else if (playerOption === botOption) {
      setGameState({ ...gameState, guide: "EMPATE" })
      movimientos = movimientos + 1

    }
    else if (playerOption === "TIJERA" && botOption === "PIEDRA") {
      setGameState({ ...gameState, guide: winBot })
      movimientos = movimientos + 1

    }
    else if (playerOption === "PAPEL" && botOption === "TIJERA") {
      setGameState({ ...gameState, guide: winBot })
      movimientos = movimientos + 1

    }
    else if (playerOption === "PIEDRA" && botOption === "PAPEL") {
      setGameState({ ...gameState, guide: winBot })
      movimientos = movimientos + 1

    }

  }
  

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="boxGame">

          <BoxGame 
            guide={gameState.guide}
            playerOption={gameState.playerOption}
            botOption={gameState.botOption}
            gameState={gameState}
            setGameState={setGameState}
          />

          <div className="informacionPPT">
            <h2 id="aciertos" className="estadisticasPPT">Aciertos: {aciertos}</h2>
            <h2 id="movimientos" className="estadisticasPPT">Movimientos: {movimientos}</h2>
          </div>
        </div>
        <div className="sorpresa">
          <CardPpt
            aciertos={aciertos}
            movimientos={movimientos}
          />
        </div>
      </div>

    </>
  );
}

export default Felicidad;