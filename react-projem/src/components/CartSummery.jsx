import PropTypes from "prop-types";
import "../styles/navi.css";

CartSummery.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired,
};

export default function CartSummery({ cart, removeFromCart, goToCart }) {
  const renderEmptyCart = () => <li className="nav-list-item">Sepetiniz Boş</li>;

  return (
    <li className="nav-list-item">
      Cart - {cart.length}
      <ul className="navi-sublist">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <li key={index} className="nav-sublist-item">
              <span>{item.product.productName}</span>
              <div className="cart-quantity">
                <button className="quantity">{item.quantity}</button>
                <button
                  onClick={() => removeFromCart(item.product)}
                  className="remove-button"
                >
                  X
                </button>
              </div>
            </li>
          ))
        ) : (
          renderEmptyCart()
        )}
        {cart.length > 0 && (
          <li className="nav-sublist-item">
            <button
              onClick={goToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go to Cart
            </button>
          </li>
        )}
      </ul>
    </li>
  );
}
