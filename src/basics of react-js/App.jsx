
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import User from './User';

function App() {
  const [counter, setCounter] = useState(0)

  return <>
    <h1>Counter Val :{counter}</h1>
    <User />
    <button onClick={()=>setCounter(counter+1)}>Increase Counter Val</button>
  </>;
}

export default App;
