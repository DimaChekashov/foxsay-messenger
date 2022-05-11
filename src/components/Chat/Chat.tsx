import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';
import './Chat.scss';

const Chat: React.FC = () => {
    const { auth, firestore } = useContext(Context);
    const [ user ] = useAuthState(auth);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = async () => {
        console.log(inputValue);
    }

    return (
        <div className="chat">
            <div className="chat__wall">

            </div>
            <div className="chat__form">
                <textarea 
                    className="chat__form-input" 
                    placeholder="Input text..." 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={sendMessage} className="chat__form-btn">Send</button>
            </div>
        </div>
    );
}

export default Chat;
