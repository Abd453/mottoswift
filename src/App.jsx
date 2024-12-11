import { useState } from 'react';
import reactLogo from './assets/carl.jpg';
import viteLogo from '/vite.svg';
import Header from './Landing/Header';
import carl from './assets/carl.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <img src={carl} alt="Carl" />
      {/* <Header /> */}
    </>
  );
}

export default App;
