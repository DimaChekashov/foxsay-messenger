import React, { useState } from 'react';
import './Form.scss';

interface Props {
    sendMessage: (message: string) => void;
}

const Form: React.FC<Props> = ({ sendMessage }) => {
    const [value, setValue] = useState("");
    
    return (
        <div className="form">
            <textarea 
                className="form__input" 
                placeholder="Input text..." 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />
            <button 
                className="form__btn"
                onClick={() => {
                    sendMessage(value);
                    setValue("");
                }} 
            >Send</button>
        </div>
    );
}

export default Form;
