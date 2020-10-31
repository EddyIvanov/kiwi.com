import React, { useRef, useEffect } from "react";
import { MessagesInputProps } from "./types";
import StyledTypingArea from "./styled";
import Icon from "../Icon";
import { send } from "../../icons/send";

const TypingArea: React.FC<MessagesInputProps> = ({ value, onSendMessage }: MessagesInputProps) => {
    const InputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const inputEl = InputRef.current;

        if (!inputEl) {
            return;
        }
        inputEl.focus();
        /**
         * BUG:
         * defaultValue makes the cursor always at the begining of the input. Because of this, we set it manually at the end.
         * it works correctly when we have value and onChange props.
         */
        inputEl.setSelectionRange(value.length, value.length);
    }, [value]);

    return (
        <StyledTypingArea className="MessagesInput">
            <StyledTypingArea.InputField
                ref={InputRef}
                defaultValue={value}
                placeholder="Type message"
            />
            <StyledTypingArea.SendButton disabled={value === ""}>
                <Icon svgPaths={send} onClick={onSendMessage} title="Send" />
            </StyledTypingArea.SendButton>
        </StyledTypingArea>
    );
};

export default TypingArea;
