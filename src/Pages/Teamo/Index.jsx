import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Index";
import "./Teamo.scss"
import Cards from "../../Components/Cards/Index"
import { images } from "../../Components/imports"
import CardTA from "../../Components/CardTA/Index"

let movimientos = 0;
let aciertos = 0;
let tiempo = false;



function TeAmo() {

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCard, setUnflippedCard] = useState([])
  const [disabledCards, setDisabledCards] = useState([])


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }


  useEffect(() => {
    shuffleArray(images)
    setCards(images)
    movimientos = 0;
    aciertos = 0;

  }, [])



  useEffect(() => {
    checkForMatch();
  }, [secondCard])

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;

    }
    if (!firstCard.name) {
      setFirstCard({ name, number })
      if (tiempo === false) {


      }
    }
    else if (!secondCard.name) {
      movimientos = movimientos + 1
      setSecondCard({ name, number })
    }
    return 1;
  }
  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCard();
    }
  }

  const disableCards = () => {
    aciertos = aciertos + 1
    setDisabledCards([firstCard.number, secondCard.number])
    resetCards()

  };



  const unflipCard = () => {
    setUnflippedCard([firstCard.number, secondCard.number])
    resetCards()
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({})
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
            {
              cards.map((card, index,) => (
                <Cards
                  name={card.nameCard}
                  frontFace={card.src}
                  number={index}
                  flipCard={flipCard}
                  unflippedCard={unflippedCard}
                  disabledCards={disabledCards}
                />

              ))
            }

            <div className="informacion">
              <h2 id="aciertos" className="estadisticas">Aciertos: {aciertos}</h2>
              <h2 id="movimientos" className="estadisticas">Movimientos: {movimientos}</h2>
            </div>
          </div>
        </div>
        <div className="sorpresa">
          <CardTA
            aciertos = {aciertos}
            title = "POR SUPUESTO..."
          />
        </div>


      </div>
    </>
  );
}

export default TeAmo;