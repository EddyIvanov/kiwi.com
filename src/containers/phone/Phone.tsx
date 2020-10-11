import React from "react";
import Keyboard from "../../components/keyboard";
import { KEYBOARD_KEYS } from "../../components/keyboard/constants";

const Phone: React.FC = () => {
    const handleKeyPress = (value: string) => {

    }

    return (
        <div className="Phone">
            <Keyboard keys={KEYBOARD_KEYS} onKeyPress={handleKeyPress} />
        </div>
    );
};

export default Phone;
