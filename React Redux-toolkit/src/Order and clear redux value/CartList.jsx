import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearallItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

function CartList() {
  const cartselector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    dispatch(clearallItem());
    localStorage.removeItem("cart");
    alert("Order placed");
    navigate("/");
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your cart items</h2>
        <span>{cartselector.length} items</span>
      </div>

      {cartselector.length > 0 ? (
        cartselector.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />

            <div className="item-info">
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>{item.brand}</p>
              </div>

              <div className="item-actions">
                <span className="price">${item.price}</span>

                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="cart-empty">
          Your cart is empty. Add products from the home page to see them here.
        </p>
      )}

      <div className="cart-footer">
        <span>Total:</span>
        <span>
          $
          {cartselector
            .reduce((sum, item) => sum + item.price, 0)
            .toFixed(2)}
        </span>
      </div>

      <button className="btn" onClick={handlePlaceOrder}>
        Place order
      </button>
    </div>
  );
}

export default CartList;
