import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import './App.css';

function App() {
  return (
    <div>
      <p>hello image</p>
      <img src={AlexaImage} alt="alexa" width={50} height={50}/>
      <img src={SiriImage} alt="siri" width={50} height={50}/>
    </div>
  );
}

export default App;