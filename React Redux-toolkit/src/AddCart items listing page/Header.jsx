import AddCart from "./AddCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <h2>MyShop</h2>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
              <h1>AddCart items listing page</h1>
            </Link>
          </li>

          {/* 
          <li><a href="#">Products</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact</a></li> 
          */}
        </ul>
      </nav>

      <AddCart />
    </header>
  );
}

export default Header;
