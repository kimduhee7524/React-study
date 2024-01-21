import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  
  const incrementHandler  = () =>{
    dispatch({type: 'increment'})
  }
  const increase10Handler = () => {
    dispatch({type: 'increase', amount: 10}) // action에 type과 Payload를 같이 담아서 보냄.
  }

  const decrementHandler  = () =>{
    dispatch({type: 'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>증가</button>
      <button onClick={decrementHandler}>감소</button>
      <button onClick={increase10Handler}>10증가</button>
    </main>
  );
};

export default Counter;
