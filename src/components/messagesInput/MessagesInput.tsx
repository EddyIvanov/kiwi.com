import React from "react";
import { MessagesInputProps } from "./types";
import StyledMessagesInput from "./MessagesInput.styled";
import Icon from "../Icon";
import Button from "../ui/button";
import { send } from "../../icons/send";
import Input from "../ui/input";

const MessagesInput: React.FC<MessagesInputProps> = ({ value, handleActiveInput, onSendMessage, onChange }: MessagesInputProps) => {
    return (
        <StyledMessagesInput className="MessagesInput">
            <Input
                value={value}
                placeholder="Type message"
                onChange={onChange}
                onFocus={handleActiveInput}
                onBlur={handleActiveInput}
            />
            <Button disabled={value === ""}>
                <Icon svgPaths={send} onClick={onSendMessage} />
            </Button>
        </StyledMessagesInput>
    );
};

export default MessagesInput;
