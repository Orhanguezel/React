import PropTypes from "prop-types";
import "../styles/navi.css";
import CartSummery from "./CartSummery";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

Navi.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired,
  goToHome: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default function Navi({ cart, removeFromCart, goToCart, goToHome, mode, toggleMode }) {
  return (
    <header
      className={`${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Sol Logo ve Başlık */}
        <div className="flex lg:flex-1 items-center">
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="React Shop Logo"
            className="h-8 w-auto"
          />
          <a href="/" className="ml-2 text-lg font-bold hover:underline">
            React Shop
          </a>
        </div>

        {/* Menü Linkleri */}
        <div className="flex items-center gap-x-12 mx-12">
          <a
            href="/"
            onClick={goToHome}
            className="text-sm font-semibold hover:text-indigo-600"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-indigo-600"
          >
            Component
          </a>
          <CartSummery
            cart={cart}
            removeFromCart={removeFromCart}
            goToCart={goToCart}
            mode={mode}
          />
        </div>

        {/* Cart ve Gece-Gündüz Toggle */}
        <div className="flex items-center gap-x-6">
          {/* Gece-Gündüz Toggle */}
          <button
            onClick={toggleMode}
            className={`p-2 rounded-full ${
              mode === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
