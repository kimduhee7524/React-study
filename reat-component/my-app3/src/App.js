import './App.css';
import Toast from './components/Toast';

function App() {
  const messageArray =[
    {
      title:"success",
      text:"Right on"
    },
    {
      title:"warning",
      text:"Hmmm"
    },
    {
      title:"error",
      text:"Un Oh!"
    },

  ]
  return (
    <div className="Wrapper">

      {/*React에서 컴포넌트를 map 함수로 순회하여 각 요소를 렌더링할 때, 각각의 컴포넌트를 구분해 주는 unique key 값이 필요함*/}
      {messageArray.map((message) => (
        <Toast message={message} />
      ))}
    </div>
    
  );
}

export default App;
