import React from 'react';

const ToastButton = (message) => {

    const btnClickHandler =(message)=>{
        console.log(message.title)
    };
    return (
        <button className='toast__button' onClick={()=> btnClickHandler(message)} >Dismiss</button>
    );
};

export default ToastButton;