import { useDispatch } from "react-redux";
import { addItem , removeItem} from "./redux/slice";

function Product() {

    const dispatch = useDispatch();

    return (
        <div className="products">

            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                    alt="Headphones"
                />
                <h3>Wireless Headphones</h3>
                <p className="price">$99</p>
                <button onClick={() => dispatch(addItem(1))}>Add to Cart</button>
                <button onClick={() => dispatch(removeItem(1))}>Remove from cart</button>

            </div>

            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400"
                    alt="Smart Watch"
                />
                <h3>Smart Watch</h3>
                <p className="price">$149</p>
                <button onClick={() => dispatch(addItem(1))}>Add to Cart</button>
                <button onClick={() => dispatch(removeItem(1))}>Remove from cart</button>

            </div>

            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400"
                    alt="Bluetooth Speaker"
                />
                <h3>Bluetooth Speaker</h3>
                <p className="price">$79</p>
                <button onClick={() => dispatch(addItem(1))}>Add to Cart</button>
                <button onClick={() => dispatch(removeItem(1))}>Remove from cart</button>

            </div>

            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
                    alt="Gaming Mouse"
                />
                <h3>Gaming Mouse</h3>
                <p className="price">$49</p>
                <button onClick={() => dispatch(addItem(1))}>Add to Cart</button>
                <button onClick={() => dispatch(removeItem(1))}>Remove from cart</button>
            </div>

        </div>
    );
}

export default Product;
