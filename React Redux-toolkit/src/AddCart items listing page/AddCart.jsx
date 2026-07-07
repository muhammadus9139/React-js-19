import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddCart() {
  const cartselector = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <Link to="/cart">
        🛒
        <span className="cart-count">
          {cartselector.length ? cartselector.length : 0}
        </span>
      </Link>
    </div>
  );
}

export default AddCart;
