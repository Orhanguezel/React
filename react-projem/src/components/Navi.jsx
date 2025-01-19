import PropTypes from "prop-types";
import "../styles/navi.css";
import CartSummery from "./CartSummery";

Navi.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired,
  goToHome: PropTypes.func.isRequired, // Home için yeni fonksiyon
};

export default function Navi({ cart, removeFromCart, goToCart, goToHome }) {
  return (
    <header className="navi-header">
      <h1 className="navi-title">React Shop</h1>
      <ul className="navi-list">
        <li className="nav-list-item">
          <button
            onClick={goToHome}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Home
          </button>
        </li>
        <CartSummery
          cart={cart}
          removeFromCart={removeFromCart}
          goToCart={goToCart}
        />
        <li className="nav-list-item">Components</li>
      </ul>
    </header>
  );
}
