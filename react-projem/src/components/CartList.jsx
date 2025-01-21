import PropTypes from "prop-types";
import "../styles/cart.css";

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired, // mode prop'u eklendi
};

export default function CartList({ cart, removeFromCart, mode }) {
  if (cart.length === 0) {
    return (
      <h2
        className={`text-center mt-10 ${
          mode === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Sepetiniz boş.
      </h2>
    );
  }

  return (
    <div
      className={`cart-container p-4 rounded ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Sepet Detayları</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr
            className={`cart-header ${
              mode === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
            }`}
          >
            <th className="p-2 border-b">Ürün Adı</th>
            <th className="p-2 border-b">Miktar</th>
            <th className="p-2 border-b">Fiyat</th>
            <th className="p-2 border-b">Toplam</th>
            <th className="p-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? mode === "dark"
                    ? "bg-gray-700"
                    : "bg-gray-100"
                  : mode === "dark"
                  ? "bg-gray-600"
                  : "bg-white"
              }`}
            >
              <td className="p-2 border-b">{item.product.productName}</td>
              <td className="p-2 border-b">{item.quantity}</td>
              <td className="p-2 border-b">${item.product.unitPrice}</td>
              <td className="p-2 border-b">
                ${item.quantity * item.product.unitPrice}
              </td>
              <td className="p-2 border-b">
                <button
                  onClick={() => removeFromCart(item.product)}
                  className={`cart-remove-button p-2 rounded ${
                    mode === "dark"
                      ? "bg-red-700 hover:bg-red-800 text-white"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
