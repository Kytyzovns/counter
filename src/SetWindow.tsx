// @flow 
import * as React from 'react';
import s from "./styles/Styles.module.css";
import {Button} from "./Button";
import {ChangeEvent} from "react";


type Props = {
    changeValues: () => void
};

export type ValuesType = {
    maxValue: number
    startValue: number
}

export const SetWindow = ({changeValues}: Props) => {

    const [values, setValues] = React.useState<ValuesType>({
        maxValue: Number(localStorage.getItem("max")),
        startValue: Number(localStorage.getItem("start"))
    });

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, maxValue: Number(e.currentTarget.value)})
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, startValue: Number(e.currentTarget.value)})
    }

    const onClickHandler = () => {
        localStorage.setItem("max", values.maxValue.toString())
        localStorage.setItem("start", values.startValue.toString())
        changeValues()
    }

    return (
        <div className={s.main}>
            <div className={s.counter}>
                <div>
                    <span>max value:</span>
                    <input onChange={onMaxValueChangeHandler} value={values.maxValue} type={'number'}/>
                </div>
                <div>
                    <span>start value</span>
                    <input onChange={onStartValueChangeHandler} value={values.startValue} type={'number'}/>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button onClick={onClickHandler} className={s.button}
                        title={"set"}/>
            </div>
        </div>
    );
};