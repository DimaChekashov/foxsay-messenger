import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import Loader from '../Loader/Loader';
import firebase from 'firebase';
import './Chat.scss';
import Letter from '../Letter/Letter';
import Form from '../Form/Form';

const Chat: React.FC = () => {
    const { auth, firestore } = useContext(Context);
    const [ user ] = useAuthState(auth);
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    const sendMessage = async (message: string) => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    console.log(messages);

    if (loading) {
        return <Loader />
    }

    return (
        <div className="chat">
            <div className="chat__wall">
                {messages?.map((message: any, i: number) => (
                    <Letter
                        key={`${i}-${message.uid}`}
                        userId={user.uid}
                        messageId={message.uid}
                        photoURL={message.photoURL}
                        displayName={message.displayName}
                        text={message.text}
                        date={message.createdAt}
                    />
                ))}
            </div>
            <Form sendMessage={sendMessage} />
        </div>
    );
}

export default Chat;
