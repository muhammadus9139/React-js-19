import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './header.css'

function NavBar() {
    return (
        <div className="header">

            <div>
                <Link className="link" to="/"><h2>Logo</h2></Link>
            </div>

            <div>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link className="link" to="/About">About</Link>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default NavBar
