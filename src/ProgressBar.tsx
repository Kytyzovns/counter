import React from 'react';
import s from './styles/Styles.module.css'

 type ProgressBarProps = {
    maxValue: number;
    currentValue: number;
 }

export const ProgressBar = ({maxValue, currentValue}: ProgressBarProps) => {
    const width = `${currentValue/maxValue*100}%`;
    console.log(width);
    return (
        <div className={s.progressBarContainer}>
            <div className={s.progressBar} style={{width: width}}>

            </div>
        </div>
    );
};

