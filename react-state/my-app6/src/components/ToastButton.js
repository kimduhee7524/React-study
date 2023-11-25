import React, { useState } from 'react';

const ToastButton = ({message}) => {
    const [btnText,setBtnText] = useState('click')

    const btnClickHandler =(title)=>{
        setBtnText('changed!');
        console.log(title)
    };
    return (
        // 함수의 인자로 객체를 전달할 때는 중괄호로 둘러싸서 전달하는 것이 올바름
        <button className='toast__button' onClick={()=> btnClickHandler(message)} >{btnText}</button>
    );
};

export default ToastButton;
