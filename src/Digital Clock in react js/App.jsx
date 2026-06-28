import Header from "./Header";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import User from "./User";
import Clock from "./Clock";

function App() {

  const [color, setcolor] = useState('green');
  return (

    <div>
      <h1>Digital Clock in react js</h1>
      <select onChange={(e) => setcolor(e.target.value)} name="" id="">
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"white"}>White</option>
      </select>
      <Clock color={color} />
    </div>
  );
}

export default App;
