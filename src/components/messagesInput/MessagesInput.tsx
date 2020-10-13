import React from "react";
import { MessagesInputProps } from "./types";
import StyledMessagesInput from "./styled/styledMessagesInput";
import Icon from "../Icon";
import Button from "../ui/button";
import { send } from "../../icons/send";
import Input from "../ui/input";

const MessagesInput: React.FC<MessagesInputProps> = ({ value, handleActiveInput, onSendMessage, onChange }: MessagesInputProps) => {
    return (
        <StyledMessagesInput className="MessagesInput">
            <StyledMessagesInput.InputField
                value={value}
                placeholder="Type message"
                onChange={onChange}
                onFocus={handleActiveInput}
                onBlur={handleActiveInput}
            />
            <StyledMessagesInput.SendButton disabled={value === ""}>
                <Icon svgPaths={send} onClick={onSendMessage} />
            </StyledMessagesInput.SendButton>
        </StyledMessagesInput>
    );
};

export default MessagesInput;
