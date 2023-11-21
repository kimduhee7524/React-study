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
      <Toast title={messageArray[0].title} text={messageArray[0].text}/>
      <Toast title={messageArray[1].title} text={messageArray[1].text}/>
      <Toast title={messageArray[2].title} text={messageArray[2].text}/>

      {/*React에서 컴포넌트를 map 함수로 순회하여 각 요소를 렌더링할 때, 각각의 컴포넌트를 구분해 주는 unique key 값이 필요함*/}
      {messageArray.map((message, index) => (
        <Toast key={index} title={message.title} text={message.text} />
      ))}
    </div>
    
  );
}

export default App;
