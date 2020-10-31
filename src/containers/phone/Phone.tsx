import React from "react";
import Keyboard from "../../components/keyboard";
import T9 from "../../components/t9";
import { KEYBOARD_KEYS, KEYBOARD_ENTITIES } from "../../components/keyboard/constants";
import MessagesList from "../../components/messagesList";
import Screen from "../../components/ui/screen";
import PhoneFrame from "../../components/ui/phoneFrame";
import TypingPanel from "../../components/ui/typingPanel";
import { hasOnlyDigits } from "../../utils/hasOnlyDigits";
import { getLastWordFromString } from "../../utils/getLastWordFromString";
import TypingArea from "../../components/typingArea";

const Phone: React.FC = () => {
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [t9Message, setT9Message] = React.useState("");

    const handleKeyPress = (value: string) => {
        if (value === "space") {
            setMessage(prevValue => prevValue + " ");
            setT9Message("");
        } else if (value === "remove") {
            handleRemove();
        } else {
            setMessage(prevValue => prevValue + value);
            setT9Message(prevValue => prevValue + value);
        }
    }

    const handleRemove = () => {
        const newMessage = message.slice(0, -1);
        const lastWord = getLastWordFromString(newMessage);

        if (hasOnlyDigits(lastWord)) {
            setT9Message(lastWord);
        } else {
            setT9Message(prevValue => prevValue.slice(0, -1));
        }
        setMessage(newMessage);
    }

    const onSendMessage = () => {
        setMessages(messages => [...messages, message] as any);
        setMessage("");
        setT9Message("");
    }

    const onT9Select = (word: string) => {
        const lastSpace = message.lastIndexOf(" ") + 1;
        const newMessage = message.slice(0, lastSpace) + word + " ";

        setMessage(newMessage);
        setT9Message("");
    }

    return (
        <PhoneFrame>
            <Screen>
                {messages.length > 0 &&
                    <MessagesList messages={messages} />
                }
                <TypingPanel>
                    <TypingArea value={message} onSendMessage={onSendMessage} />
                    <T9 digitMapping={KEYBOARD_ENTITIES} inputValue={t9Message} onSelect={onT9Select} />
                    <Keyboard keys={KEYBOARD_KEYS} onKeyPress={handleKeyPress} />
                </TypingPanel>
            </Screen>
        </PhoneFrame>
    );
};

export default Phone;
