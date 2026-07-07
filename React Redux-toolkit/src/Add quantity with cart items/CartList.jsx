import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity, clearallItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

function CartList() {
  const cartselector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(1, Number(value));
    dispatch(updateQuantity({ id, quantity }));
  };

  const handlePlaceOrder = () => {
    dispatch(clearallItem());
    localStorage.removeItem("cart");
    alert("Order placed");
    navigate("/");
  };

  const cartTotal = cartselector.reduce((sum, item) => {
    const qty = item.quantity ?? 1;
    return sum + item.price * qty;
  }, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your cart items</h2>
        <span>{cartselector.length} items</span>
      </div>

      {cartselector.length > 0
        ? cartselector.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />

              <div className="item-info">
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>{item.brand}</p>

                  <div className="item-quantity">
                    <label htmlFor={`qty-${item.id}`}>Qty</label>

                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity ?? 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                    />
                  </div>
                </div>
                           <div className="item-actions">
                  <span className="price">
                    $
                    {(
                      item.price * (item.quantity ?? 1)
                    ).toFixed(2)}
                  </span>

                  <button
                    className="btn"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        : (
          <p className="cart-empty">
            Your cart is empty. Add products from the home page to see them here.
          </p>
        )}

      <div className="cart-footer">
        <span>Total:</span>
        <span>${cartTotal.toFixed(2)}</span>
      </div>

      {cartselector.length > 0 && (
        <button className="btn" onClick={handlePlaceOrder}>
          Place order
        </button>
      )}
    </div>
  );
}

export default CartList;
