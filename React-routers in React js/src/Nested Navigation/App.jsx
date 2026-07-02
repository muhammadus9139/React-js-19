// import "./App.css";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import College from "./College";
import CollegeDetails from "./CollegeDetails";
import Department from "./Department";
import Student from "./Student";  

function App() {
  return (
    <>
    <NavBar/>
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
        <Route path="/college" element={<College/>}>
            <Route path="CollegeDetails" element={<CollegeDetails/>} />
            <Route path="Department" element={<Department/>} />
            <Route path="Student" element={<Student/>} />
        </Route>


      {/* <Route path="/*" element={<PageNotFound/>} /> */}
      {/* <Route path="/*" element={<Navigate to="/login"/>} /> */}
    </Routes>
    
      
    </>
  );
}

export default App;
