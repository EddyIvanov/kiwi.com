import React from "react";
import { KeyboardProps } from "./types";
import StyledKeyboard from "./styled";
import { KEYBOARD_ENTITIES } from "./constants";

const Keyboard: React.FC<KeyboardProps> = ({ keys, onKeyPress }: KeyboardProps) => {
    return (
        <StyledKeyboard className="Keyboard">
            {keys.map(key => {
                return (
                    <StyledKeyboard.Key key={key} onClick={() => onKeyPress(key)}>
                        <StyledKeyboard.Title>{key}</StyledKeyboard.Title>
                        <StyledKeyboard.Subtitles>
                            {KEYBOARD_ENTITIES[key].map((subtitle: any) => {
                                return (
                                    <div key={`${key}-${subtitle}`}>
                                        {subtitle && key !== subtitle &&
                                            <span>{subtitle}</span>
                                        }
                                    </div>
                                )
                            })}
                        </StyledKeyboard.Subtitles>
                    </StyledKeyboard.Key>
                )
            })}
        </StyledKeyboard>
    );
};

export default Keyboard;
