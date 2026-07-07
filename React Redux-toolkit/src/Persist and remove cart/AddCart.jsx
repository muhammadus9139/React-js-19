import { useSelector } from "react-redux";

function AddCart() {

    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="cart">
            🛒
            <span className="cart-count">
                {cartItems.length}
            </span>
        </div>
    );
}

export default AddCart;
