import React from "react";
import Keyboard from "../../components/keyboard";
import { KEYBOARD_KEYS } from "../../components/keyboard/constants";
import MessagesList from "../../components/messagesList";
import Screen from "../../components/ui/screen";
import MessagesInput from "../../components/messagesInput";

const Phone: React.FC = () => {
    const [messages, setMessages] = React.useState([]);
    const [messageInputValue, setMessageInputValue] = React.useState("");
    const [visibleKeyboard, setVisibleKeyboard] = React.useState(false);

    const handleKeyPress = (value: string) => {

    }

    const handleActiveInput = () => {

    }

    const handleMessageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageInputValue(event.target.value);
    }

    const onSendMessage = () => {
        setMessages(messages => [...messages, messageInputValue] as any);
        setMessageInputValue("");
    }

    return (
        <Screen>
            {messages.length > 0 &&
                <MessagesList messages={messages} />
            }
            <MessagesInput value={messageInputValue} onChange={handleMessageInputChange} handleActiveInput={handleActiveInput} onSendMessage={onSendMessage} />
            <Keyboard keys={KEYBOARD_KEYS} onKeyPress={handleKeyPress} />
        </Screen>
    );
};

export default Phone;
