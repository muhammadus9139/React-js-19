//custom class

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "activeLink" : "normalLink"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "activeLink" : "normalLink"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "activeLink" : "normalLink"
        }
      >
        Login
      </NavLink>
    </>
  );
}

export default NavBar;
