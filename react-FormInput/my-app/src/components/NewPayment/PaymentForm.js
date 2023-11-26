import React, { useState } from 'react';

import './PaymentForm.css';

const PaymentForm = () => {
    const [objectState,setObjectState] =useState({
        name:'',
        price:0,
        today:null
    })

const inputTextChangeHandler=(event) =>{
    // name만 바뀐 값으로 업데이트, 나머지(price,today) 안 바뀐 값들은 이전 값 그대로
    setObjectState(prevState => ({...prevState, name:event.target.value}));
};
const inputNumberChangeHandler=(event) =>{
    setObjectState(prevState => ({...prevState, price:event.target.value}));
};
const inputDateChangeHandler=(event) =>{
    setObjectState(prevState => ({...prevState, today:event.target.value}));
};
const btnSubimHandler =()=> {
    console.log(objectState.name);
    console.log(objectState.price);
    console.log(objectState.today);
}

  return (
    <form>
      <div className='new-payment__controls'>
        <div className='new-payment__control'>
          <label>이름</label>
          <input type='text' value={objectState.name} onChange={inputTextChangeHandler} />
        </div>
        <div className='new-payment__control'>
          <label>금액</label>
          <input type='number' min='0.01' step='0.01' value={objectState.price} onChange={inputNumberChangeHandler} />
        </div>
        <div className='new-payment__control'>
          <label>날짜</label>
          <input type='date' min='2019-01-01' max='2023-12-31' value={objectState.today} onChange={inputDateChangeHandler} />
        </div>
      </div>
      <div className='new-payment__actions'>
        <button type='button' onClick={btnSubimHandler} >결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
