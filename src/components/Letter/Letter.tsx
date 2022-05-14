import React from 'react';
import { getDate } from '../../utils/helpers';
import './Letter.scss';

interface Props {
    userId: string;
    messageId: string;
    photoURL: string;
    displayName: string;
    text: string;
    date: number;
}

const Letter: React.FC<Props> = ({ userId, messageId, photoURL, displayName, text, date }) => {
    return (
        <div className={`letter${userId === messageId ? " letter_my" : ""}`}>
            <div className="letter__avatar">
                <img src={photoURL} alt={messageId} />
            </div>
            <div>
                <div className="letter__username">{displayName} <span className="letter__date">{getDate(date)}</span></div>
                <div className="letter__text">{text}</div>
            </div>
        </div>
    );
}

export default Letter;
