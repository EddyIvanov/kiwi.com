import React from "react";
import { KeyboardProps } from "./types";

const Keyboard: React.FC<KeyboardProps> = ({ keys, onKeyPress }: KeyboardProps) => {
    return (
        <div className="Keyboard">
            by
            {keys.map(key => {
                return (
                    <div onClick={() => onKeyPress(key)}>{key}</div>
                )
            })}
        </div>
    );
};

export default Keyboard;
