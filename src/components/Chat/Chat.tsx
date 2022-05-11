import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import Loader from '../Loader/Loader';
import firebase from 'firebase';
import './Chat.scss';

const Chat: React.FC = () => {
    const { auth, firestore } = useContext(Context);
    const [ user ] = useAuthState(auth);
    const [inputValue, setInputValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: inputValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInputValue('');
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="chat">
            <div className="chat__wall">
                {messages?.map((message: any) => (
                    <div className={`chat__letter${user.uid === message.uid ? " chat__letter_our" : ""}`}>
                        <img src={message.photoURL} alt={message.uid} className="chat__letter-avatar" />
                        <div>{message.displayName}</div>
                        <div>{message.text}</div>
                    </div>
                ))}
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
