// @flow 
import * as React from 'react';
import s from "./styles/Styles.module.css";
import {Button} from "./Button";
import {ChangeEvent, useRef} from "react";
import {TextType} from "./App";


type SetWindowProps = {
    changeValues: () => void
    maxValue: number
    startValue: number
    setMessage: (message: TextType) => void
}

type ValuesType = {
    maxValue: number
    startValue: number
}

type ChangeType = {
    maxError: boolean
    startError: boolean
    massage: TextType
}

export const SetWindow = ({changeValues, maxValue, startValue, setMessage}: SetWindowProps) => {

    const [values, setValues] = React.useState<ValuesType>({
        maxValue: maxValue,
        startValue: startValue
    });

    const currentChange = useRef<ChangeType>({maxError: false, startError: false, massage: null});

    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if(values.startValue >= Number(e.currentTarget.value)) {
            currentChange.current = {maxError: true, startError: true, massage: "Incorrect value"}
        } else {
            currentChange.current = ({maxError: false, startError: false, massage: "enter values and press Set"})
        }
        setValues({ ...values, maxValue: Number(e.currentTarget.value)})
        setMessage(currentChange.current.massage)
    }

    const onStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if(values.maxValue <= Number(e.currentTarget.value)) {
            currentChange.current = {maxError: true, startError: true, massage: "Incorrect value"}
        } else if(Number(e.currentTarget.value) < 0) {
            currentChange.current = {maxError: false, startError: true, massage: "Incorrect value"}
        } else {
            currentChange.current = ({maxError: false, startError: false, massage: "enter values and press Set"})
        }
        setMessage(currentChange.current.massage)
        setValues({ ...values, startValue: Number(e.currentTarget.value)})
    }

    const onClickHandler = () => {
        localStorage.setItem("max", values.maxValue.toString())
        localStorage.setItem("start", values.startValue.toString())
        currentChange.current = ({...currentChange.current, massage: null})
        changeValues()
        setMessage(null)
    }

    return (
        <div className={s.main}>
            <div className={s.counter}>
                <div>
                    <span>max value:</span>
                    <input className={`${currentChange.current.maxError ? s.inputError : ""}`} onChange={onMaxChangeHandler} value={values.maxValue} type={'number'}/>
                </div>
                <div>
                    <span>start value</span>
                    <input className={`${currentChange.current.startError ? s.inputError : ""}`} onChange={onStartChangeHandler} value={values.startValue} type={'number'}/>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button disabled={currentChange.current.massage === "Incorrect value"} onClick={onClickHandler} className={s.button}
                        title={"set"}/>
            </div>
        </div>
    );
};