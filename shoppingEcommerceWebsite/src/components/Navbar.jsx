import { useSelector } from "react-redux";

function Navbar({ onCartClick }) {
  const totalQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  return (
    <header className="navbar">
      <div className="brand">
        <div className="brand-icon">S</div>

        <div>
          <h2>ShopSphere</h2>
          <span>Smart Shopping</span>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#products">Products</a>
        <a href="#ai">AI Picks</a>
        <a href="#cart">Cart</a>
      </nav>

      <button
        className="cart-button"
        onClick={onCartClick}
      >
        🛒 Cart
        <span>{totalQuantity}</span>
      </button>
    </header>
  );
}

export default Navbar;