import React from 'react';
import "./Toast.css";

const Toast = (props) => {
    return (
        <div className={`toast toast-${props.title}`}>
            <main className='toast__message'>
                <p className='toast__message-title'>{props.title}</p>
                <p className='toast__message-text'>{props.text}</p>
            </main>
            <button className='toast__button'>Dismiss</button>
        </div>
        
    );
};

export default Toast;