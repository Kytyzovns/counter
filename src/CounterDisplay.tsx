import React from 'react';
import s from './styles/Styles.module.css'
import {ProgressBar} from "./ProgressBar";
import {Button} from "./Button";

type CounterDisplayProps = {
    counter: number
    maxValue: number
    resetCounter: () => void
    increaseCounter: () => void
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({counter, maxValue, resetCounter, increaseCounter}) => {


    return (
        <div className={s.main}>
            <span className={s.maxValue}>max value = {maxValue}</span>
            <div className={s.counter}>
                <span className={`${counter >= maxValue ? s.finished : ""} ${s.text}`}>{counter}</span>

                <ProgressBar maxValue={maxValue} currentValue={counter}/>
            </div>

            <div className={s.buttonsContainer}>
                <Button className={s.button} disabled={counter >= maxValue} onClick={increaseCounter}
                        title={"inc"}/>
                <Button className={s.button} disabled={counter === 0} onClick={resetCounter} title={"reset"}/>
            </div>
        </div>
    )
};

