import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";
import { useEffectEvent,lazy, Suspense, use, useActionState, useReducer, useState, Activity, useEffect } from "react";
import "./App.css";


function App() {

  const [count, setcount] = useState(0)

  const countcontrol = useEffectEvent(() => {
    setcount(count + 1);
  })

  useEffect(() => {
    const id = setInterval(() => {
      countcontrol();
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>useEffectEvent in react 19.2</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default App;

