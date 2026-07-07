import { useSelector } from "react-redux";

function AddCart() {
  const cartselector = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      🛒
      <span className="cart-count">{cartselector.length ? cartselector.length:0}</span>
    </div>
  );
}

export default AddCart;
