import { useDispatch } from 'react-redux';
import './App.css'
import Header from './Header';
import Product from './Product';
import { clearallItem } from './redux/slice';

function App() {

  const dispatch=useDispatch();
  
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero">
          <p className="eyebrow">Add to cart product</p>
          <h1 className="main-title">A modern cart UI built with React + Redux Toolkit</h1>
          <p className="hero-copy">
            Explore products, add items to the cart, and see the count update instantly.
            This design improves spacing, typography, and card styling for a cleaner product storefront.
          </p>
        </section>

        <Product />
      </main>
    </div>
  );
}

export default App
