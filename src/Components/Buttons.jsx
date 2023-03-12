import { useState } from 'react';
import '../App.css';

export const NextButton = (props) => {
    return(
        <button onClick={props.onClick}>
            Next
        </button>
    )
}

export const BackButton = (props) => {
    return(
        <button onClick={props.onClick}>
            Back
        </button>
    )
}

export const RandomButton = (props) => {
    return(
        <button onClick={props.onClick}>
            Shuffle
        </button>
    )
}