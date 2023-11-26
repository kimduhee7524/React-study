import React from 'react';

const ToastButton = ({message}) => {

    const btnClickHandler =(title)=>{
        console.log(title)
    };
    return (
        // 함수의 인자로 객체를 전달할 때는 중괄호로 둘러싸서 전달하는 것이 올바름
        <button className='toast__button' onClick={()=> btnClickHandler(message)} >Dismiss</button>
    );
};

export default ToastButton;
