import { useState } from 'react';
import '../App.css';

const FlashCard = (props) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <p>{props.question}</p>
          {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" /> */}
        </div>
        <div class="flip-card-back">
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FlashCard;
