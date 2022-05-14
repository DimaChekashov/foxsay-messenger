import React from 'react';
import './Letter.scss';

interface Props {
    userId: string;
    messageId: string;
    photoURL: string;
    displayName: string;
    text: string;
}

const Letter: React.FC<Props> = ({ userId, messageId, photoURL, displayName, text }) => {
    return (
        <div className={`letter${userId === messageId ? " letter_my" : ""}`}>
            <img src={photoURL} alt={messageId} className="letter__avatar" />
            <div className="letter__username">{displayName}</div>
            <div className="letter__text">{text}</div>
            <div className="letter__date">00:00 AM</div>
        </div>
    );
}

export default Letter;
