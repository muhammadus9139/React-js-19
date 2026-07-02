import './header.css'
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (

        <div>

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
                            <Link className="link" to="/in/users/login">Login</Link>
                        </li>
                        <li>
                            <Link className="link" to="/in/users/about">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/college">College</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/users/lists">Lists</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default NavBar
