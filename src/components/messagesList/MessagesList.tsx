import React from "react";
import Message from "../ui/message";
import { MessagesListProps } from './types';

const MessagesList: React.FC<MessagesListProps> = ({ messages }: MessagesListProps) => {
    return (
        <div className="MessagesList">
            {messages.map(message => {
                return (
                    <Message>{message} </Message>
                )
            })}
        </div>
    );
};

export default MessagesList;