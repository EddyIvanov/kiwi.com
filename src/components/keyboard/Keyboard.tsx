import React from "react";
import { KeyboardProps } from "./types";
import StyledKeyboard from "./styled/styledKeyboard";
import { KEYS_CONTENT } from "./constants";

const Keyboard: React.FC<KeyboardProps> = ({ keys, onKeyPress }: KeyboardProps) => {
    return (
        <StyledKeyboard className="Keyboard">
            {keys.map(key => {
                return (
                    <StyledKeyboard.Button key={key} onClick={() => onKeyPress(key)}>
                        <StyledKeyboard.Title>{key}</StyledKeyboard.Title>
                        <StyledKeyboard.Subtitles>
                            {KEYS_CONTENT[key].map((subtitle: any) => {
                                return (
                                    <div key={`${key}-${subtitle}`}>
                                        {subtitle &&
                                            <span>{subtitle}</span>
                                        }
                                    </div>
                                )
                            })}
                        </StyledKeyboard.Subtitles>
                    </StyledKeyboard.Button>
                )
            })}
        </StyledKeyboard>
    );
};

export default Keyboard;
