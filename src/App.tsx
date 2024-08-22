import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {CounterDisplay} from "./CounterDisplay";
import {Button} from "./Button";
import s from './styles/Styles.module.css'
import {SetWindow, ValuesType} from "./SetWindow";
import {ProgressBar} from "./ProgressBar";


type TextType = "Incorrect value" | "enter values and press Set" | null

function App() {

    let max = Number(localStorage.getItem("max"));
    let start = Number(localStorage.getItem("start"));

    const [values, setValues] = React.useState<ValuesType>({
        maxValue: max ? max : 5,
        startValue: start ? start : 0,
    });

    const [counter, setCounter] = useState<number>(values.startValue);
    // const [editingText, setEditingText] = useState<TextType>(null);


    const increaseCounter = () => {
        if (counter < values.maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(values.startValue);
    }

    const changeValues = () => {
        setValues({
            maxValue: Number(localStorage.getItem("max")),
            startValue: Number(localStorage.getItem("start"))
        });
        setCounter(Number(localStorage.getItem("start")))
    }
    return (
        <div className={s.appContainer}>
            <SetWindow changeValues={changeValues}/>
            <CounterDisplay counter={counter} maxValue={Number(localStorage.getItem("max"))}
                            increaseCounter={increaseCounter}
                            resetCounter={resetCounter}/>
        </div>

    );
}

export default App;
