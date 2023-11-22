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
      {messageArray.map((message, index) => (
        <Toast key={index} message={message} />
      ))}
    </div>
  );
}

export default App;
