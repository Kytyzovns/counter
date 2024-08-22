import {ButtonHTMLAttributes} from "react";

type ButtonPropsType = {

} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({className, title, disabled, onClick}: ButtonPropsType) => {
    return (
        <button disabled={disabled} className={className} onClick={onClick}>{title}</button>
    )
}
