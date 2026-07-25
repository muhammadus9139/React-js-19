// import "./App.css";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
    <NavBar/>
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/*" element={<PageNotFound/>} /> */}
      <Route path="/*" element={<Navigate to="/login"/>} />
    </Routes>
    
      
    </>
  );
}

export default App;
