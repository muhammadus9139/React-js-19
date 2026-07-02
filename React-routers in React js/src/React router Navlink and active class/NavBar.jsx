import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink className="link" to="/">
        Home
      </NavLink>

      <NavLink className="link" to="/about">
        About
      </NavLink>

      <NavLink className="link" to="/login">
        Login
      </NavLink>
    </>
  );
}

export default NavBar;
