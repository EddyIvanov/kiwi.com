import React from "react";
import { KeyboardProps } from "./types";
import StyledKeyboard from "./styled/styledKeyboard";

const Keyboard: React.FC<KeyboardProps> = ({ keys, onKeyPress }: KeyboardProps) => {
    return (
        <StyledKeyboard className="Keyboard">
            {keys.map(key => {
                return (
                    <StyledKeyboard.Button onClick={() => onKeyPress(key)}>{key}</StyledKeyboard.Button>
                )
            })}
        </StyledKeyboard>
    );
};

export default Keyboard;
