import { useState } from 'react';
import '../App.css';

const FlashCard = (props) => {
  return (
    <div className='flashcard' onClick={props.onClick}>
        <p>{props.card[props.isFlipped]}</p>
        {props.isFlipped === 'front' ? <img className='picture' src = {props.img} /> : ''}
    </div>
  );
}

export default FlashCard;