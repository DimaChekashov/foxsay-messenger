import React, { useContext, useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Loader from '../Loader/Loader';
import firebase from 'firebase';
import Letter from '../Letter/Letter';
import Form from '../Form/Form';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './Chat.scss';

const Chat: React.FC = () => {
    const { auth, firestore } = useContext(Context);
    const [ user ] = useAuthState(auth);
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );
    const wall = useRef<any>();

    const sendMessage = async (message: string) => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    useEffect(() => {
        if(wall.current) wall.current.scrollTop = wall.current.scrollHeight;
    }, [loading])

    useEffect(() => {
        if(wall.current && ((wall.current.scrollTop + 770) > (wall.current.scrollHeight - 300))) {
            wall.current.scrollTop = wall.current.scrollHeight;
        }
    }, [messages]);

    if (loading) {
        return <Loader />
    }

    return (
        <div className="chat">
            <SimpleBar className="chat__wall" scrollableNodeProps={{ ref: wall }}>
                <TransitionGroup className="chat__list">
                    {messages?.map((message: any, i: number) => (
                        <CSSTransition
                            key={`${i}-${message.uid}`}
                            timeout={500}
                            classNames="item"
                        >
                            <Letter
                                userId={user.uid}
                                messageId={message.uid}
                                photoURL={message.photoURL}
                                displayName={message.displayName}
                                text={message.text}
                                date={message.createdAt}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </SimpleBar>
            <Form sendMessage={sendMessage} />
        </div>
    );
}

export default Chat;
