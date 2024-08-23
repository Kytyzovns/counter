import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {CounterDisplay} from "./CounterDisplay";
import {Button} from "./Button";
import s from './styles/Styles.module.css'
import {SetWindow} from "./SetWindow";
import {ProgressBar} from "./ProgressBar";


export type TextType = "Incorrect value" | "enter values and press Set" | null

type ValuesType = {
    maxValue: number
    startValue: number
    counter: number
}


function App() {

    let max = Number(localStorage.getItem("max")) ? Number(localStorage.getItem("max")) : 5;
    let start = Number(localStorage.getItem("start")) ? Number(localStorage.getItem("start")) : 0;

    const [values, setValues] = React.useState<ValuesType>({
        maxValue: max,
        startValue: start,
        counter: start
    });

    const [currenMessage, setCurrentMessage] = React.useState<TextType>(null);


    const increaseCounter = () => {
        if (values.counter < values.maxValue) {
            setValues({...values, counter: values.counter + 1})
        }
    }

    const resetCounter = () => {
        setValues({...values, counter: values.startValue});
    }

    const changeValues = () => {
        setValues({
            maxValue: Number(localStorage.getItem("max")),
            startValue: Number(localStorage.getItem("start")),
            counter: Number(localStorage.getItem("start"))
        });

    }
    return (
        <div className={s.appContainer}>
            <SetWindow setMessage={setCurrentMessage} maxValue={max} startValue={start} changeValues={changeValues}/>
            <CounterDisplay message={currenMessage} counter={values.counter} maxValue={Number(localStorage.getItem("max"))}
                            increaseCounter={increaseCounter}
                            resetCounter={resetCounter}/>
        </div>

    );
}

export default App;
