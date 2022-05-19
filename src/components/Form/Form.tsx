import React, { useState } from 'react';
import './Form.scss';

interface Props {
    sendMessage: (message: string) => void;
}

const Form: React.FC<Props> = ({ sendMessage }) => {
    const [value, setValue] = useState<string>("");

    const onSendMessage = () => {
        if(value.length) {
            sendMessage(value);
            setValue("");
        }
    }
    
    return (
        <div className="form">
            <textarea 
                className="form__input" 
                placeholder="Write a message..." 
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        e.preventDefault();
                        onSendMessage();
                    }
                }}
            />
            <button 
                className="form__btn"
                onClick={onSendMessage}
            >Send</button>
        </div>
    );
}

export default Form;
