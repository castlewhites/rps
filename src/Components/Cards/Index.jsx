import React, {useState, useEffect} from "react";
import ReactCardFlip from "react-card-flip";
import ejemplo from "../../assets/foto.png"

import "./Cards.scss"

const Cards = ({name, number, frontFace, flipCard, unflippedCard, disabledCards}) =>{
  const [isFlip, setIsFlip] = useState(false);
  const [hasEvent, setHasEvent] = useState(true)

  useEffect(() => {
    if(unflippedCard.includes(number)){
      setTimeout(()=> setIsFlip(false), 700)
    }
  },[unflippedCard])

  useEffect(()=>{
    if(disabledCards.includes(number)){
      setHasEvent(false)
    }
  },[disabledCards])

  const handleClick = e =>{
    const value = flipCard(name, number);
    if (value !== 0){
      setIsFlip(!isFlip)
    }
    
  }
  return(
    <>
    <div className="memory-card">
      <ReactCardFlip isFlipped={isFlip}>
        <img className="card-image"  src={ejemplo} onClick={hasEvent ? handleClick: null}/>
        <img className="card-image" src={frontFace} onClick={hasEvent ? handleClick: null}/>
      </ReactCardFlip>
    </div>

    </>
  )
}
export default Cards;