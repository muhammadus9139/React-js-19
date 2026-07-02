import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function NavBar() {
    return (
        <div style={{color:"grey",padding:"10px"}}>
            <Link  to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link  to="/login">Login</Link>
        </div>
    );
}

export default NavBar
