import React from "react";
import Message from "../ui/message";
import { MessagesListProps } from './types';
import StyledMessagesList from './styled';

const MessagesList: React.FC<MessagesListProps> = ({ messages }: MessagesListProps) => {
    return (
        <StyledMessagesList className="MessagesList">
            {messages.map((message, index) => {
                return (
                    <Message key={index}>{message} </Message>
                )
            })}
        </StyledMessagesList>
    );
};

export default MessagesList;