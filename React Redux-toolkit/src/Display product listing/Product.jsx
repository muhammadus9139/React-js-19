import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchproducts } from "./redux/Productslice";

function Product() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    if (status === "loading") {
        return <div className="products-status">Loading products...</div>;
    }

    if (status === "failed") {
        return <div className="products-status error">{error || "Failed to load products."}</div>;
    }

    return (
        <div className="products">
            {items.length === 0 ? (
                <div className="products-status">No products found.</div>
            ) : (
                items.map((item) => (
                    <article key={item.id} className="card">
                        <img src={item.thumbnail} alt={item.title} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="brand">{item.brand}</div>
                            <div className="meta">
                                <span className="price">${item.price}</span>
                                <span className="rating">⭐ {item.rating}</span>
                            </div>
                            <div className="actions">
                                <button className="btn" onClick={() => dispatch(addItem(1))}>
                                    Add to cart
                                </button>
                                <button className="btn secondary" onClick={() => dispatch(removeItem(1))}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </article>
                ))
            )}
        </div>
    );
}

export default Product;
