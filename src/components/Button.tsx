import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    clickFunction?: () => void
    type?: "submit" | "reset" | "button"
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, clickFunction, type, disabled }) => {
    return (
        <button disabled={disabled} type={type === "submit" ? "submit" : "button"} onClick={clickFunction} className="back">
            <span>{children}</span>
        </button>
    )
}
