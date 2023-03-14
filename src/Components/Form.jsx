import React, { useState, Component } from 'react';
import '../App.css';

const MainForm = ({card, isFlipped, key}) => {
    const [inputCheck, setInputCheck] = useState(false);
    const [input, setInput] = useState('');
    const [Reset, SetReset] = useState(key)

    const onCheckAnswer = (e) => {
         if(input === card.back){
            setInputCheck(true);
         }
         else{
            setInputCheck(false);
        }
        SetReset(0);
        e.preventDefault();
    }

    const handleChange = (e) => {
        setInput(e.target.value);
      }

        return(
            <div>
                <form>
                    <label>Answer:
                        <input type="text" name="name" value={input} onChange={handleChange} disabled={isFlipped === 'back'} />
                    </label>
                    <input type="submit" value="Submit" disabled={isFlipped === 'back'} onClick={onCheckAnswer}/>
                </form>
                <h4>Is your answer correct?</h4>
                {Reset === 0 ? (inputCheck === false ? <h5>Incorrect</h5> : <h5>Correct!</h5>) : ''}
                
            </div>
        );
};

export default MainForm;