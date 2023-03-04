import { useState } from 'react';
import '../App.css';

const NextButton = (props) => {
    return(
        <button onClick={props.onClick}>
            Next
        </button>
    )
}

export default NextButton;