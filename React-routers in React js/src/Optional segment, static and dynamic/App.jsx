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
import Users from "./Users";
import UserDetails from "./UserDetails";
import Lists from "./Lists";

function App() {
  return (
    <>

      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/lists?" element={<Lists />} />
          <Route path="/users/:id/:name?" element={<UserDetails />} />


          <Route path="/in/users">
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>



        <Route path="/college" element={<College />}>
          <Route path="CollegeDetails" element={<CollegeDetails />} />
          <Route path="Department" element={<Department />} />
          <Route index element={<Student />} />
        </Route>


        {/* <Route path="/*" element={<PageNotFound/>} /> */}
        {/* <Route path="/*" element={<Navigate to="/login"/>} /> */}
      </Routes>

    </>
  );
}

export default App;
