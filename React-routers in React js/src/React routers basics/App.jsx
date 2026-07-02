import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <h1>React router in react js</h1>
      <Link to="/">Home </Link>
      <br />
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
