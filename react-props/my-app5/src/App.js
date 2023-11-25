import './App.css';
import Toast from './components/Toast';


function App() {

  const message ={
    title:"title value",
    text:"text value"
  }
  return (
    <div className="Wrapper">
      <Toast title={message.title} text={message.text}/>
    </div>
  );
}

export default App;
