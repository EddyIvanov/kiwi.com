import React from "react";
import Message from "../ui/message";
import { MessagesListProps } from './types';
import StyledMessagesList from './StyledMessagesList';

const MessagesList: React.FC<MessagesListProps> = ({ messages }: MessagesListProps) => {
    return (
        <StyledMessagesList className="MessagesList">
            {messages.map(message => {
                return (
                    <Message>{message} </Message>
                )
            })}
        </StyledMessagesList>
    );
};

export default MessagesList;