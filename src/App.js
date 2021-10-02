import profileImage from './img/derek canoe.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Derek Schmucker</h2>
    [// eslint-disable-next-line]
      <img src={profileImage} alt= {"profile"}/>
    </div>
  );
}

export default App;
