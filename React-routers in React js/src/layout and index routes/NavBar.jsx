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
                        <Link className="link" to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link className="link" to="/About">About</Link>
                    </li>
                    <li>
                        <Link className="link" to="/college">College</Link>
                    </li>
                </ul>
             </div>
          </div>
        <Outlet/>
      </div>
    );
}

export default NavBar
