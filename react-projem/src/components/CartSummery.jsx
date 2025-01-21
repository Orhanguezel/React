import { useState } from "react";
import PropTypes from "prop-types";

CartSummery.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired, // mode prop'u eklendi
};

export default function CartSummery({ cart, removeFromCart, goToCart, mode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`text-sm font-semibold ${
          mode === "dark" ? "text-white" : "text-gray-900"
        } hover:underline`}
      >
        Cart - {cart.length}
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg z-10 ${
            mode === "dark"
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-gray-900 border-gray-200"
          }`}
        >
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center px-4 py-2 border-b last:border-none ${
                  mode === "dark" ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <span>{item.product.productName}</span>
                <div className="flex items-center space-x-2">
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.product)}
                    className={`text-red-500 hover:text-red-700`}
                  >
                    X
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4">
              <p
                className={`${
                  mode === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Sepetiniz Boş
              </p>
            </div>
          )}
          {cart.length > 0 && (
            <div className="p-4">
              <button
                onClick={goToCart}
                className={`w-full px-4 py-2 rounded ${
                  mode === "dark"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Go to Cart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
