import React from "react";
import Keyboard from "../../components/keyboard";
import { KEYBOARD_KEYS } from "../../components/keyboard/constants";
import MessagesList from "../../components/messagesList";
import Screen from "../../components/ui/screen";
import PhoneFrame from "../../components/ui/phoneFrame";
import MessagesInput from "../../components/messagesInput";
import TypingPanel from "../../components/ui/typingPanel";

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

        <PhoneFrame>
            <Screen>
                {messages.length > 0 &&
                    <MessagesList messages={messages} />
                }
                <TypingPanel>
                    <MessagesInput value={messageInputValue} onChange={handleMessageInputChange} handleActiveInput={handleActiveInput} onSendMessage={onSendMessage} />
                    <Keyboard keys={KEYBOARD_KEYS} onKeyPress={handleKeyPress} />
                </TypingPanel>
            </Screen>
        </PhoneFrame>
    );
};

export default Phone;
