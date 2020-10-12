import React from "react";
import { KeyboardProps } from "./types";
import StyledKeyboard from "./Keyboard.styled";

const Keyboard: React.FC<KeyboardProps> = ({ keys, onKeyPress }: KeyboardProps) => {
    return (
        <StyledKeyboard className="Keyboard">
            {keys.map(key => {
                return (
                    <div onClick={() => onKeyPress(key)}>{key}</div>
                )
            })}
        </StyledKeyboard>
    );
};

export default Keyboard;
