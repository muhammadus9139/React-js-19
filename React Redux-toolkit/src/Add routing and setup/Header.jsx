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
              <h1>Add routing and setup</h1>
            </Link>
          </li>
        </ul>
      </nav>

      <AddCart />
    </header>
  );
}

export default Header;
