import React from 'react'

interface ButtonProps {
    text: string,
    handleBtnClick: () => void;

}

export const Button: React.FC<ButtonProps> = ({text, handleBtnClick}) => {
        return (
            <button className='btn' onClick={handleBtnClick}>{text}</button>
        );
}