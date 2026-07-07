import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchproducts } from "./redux/Productslice";

function Product() {
    const dispatch = useDispatch();
    const { items, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    if (error) {
        return <div className="products-status error">{error}</div>;
    }

    const cartselector = useSelector((state) => state.cart.items);

    return (
        <div className="products">
            {items.map((item) => (
                <article key={item.id} className="card">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="content">
                        <div className="title">{item.title}</div>
                        <div className="brand">{item.brand}</div>
                        <div className="meta">
                            <span className="price">${item.price}</span>
                            <span className="rating">⭐ {item.rating}</span>
                        </div>

                        {
                            cartselector.find(cartItem => cartItem.id === item.id) ?
                                <div className="actions">
                                    <button className="btn added" disabled>
                                        Added in cart
                                    </button>
                                </div>
                                :
                                <div className="actions">
                                    <button className="btn" onClick={() => dispatch(addItem(item))}>
                                        Add to cart
                                    </button>
                                </div>
                        }

                    </div>
                </article>
            ))}
        </div>
    );
}

export default Product;
