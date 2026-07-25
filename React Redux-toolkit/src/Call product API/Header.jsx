import AddCart from "./AddCart";

function Header() {
  return (
    <header>
      <div className="logo">
        <h2>MyShop</h2>
      </div>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <AddCart/>

    </header>
  );
}

export default Header;

