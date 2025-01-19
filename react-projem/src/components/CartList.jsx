import PropTypes from "prop-types";
import "../styles/cart.css";

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default function CartList({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return <h2 className="text-center mt-10">Sepetiniz boş.</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold mb-4">Sepet Detayları</h2>
      <table className="cart-table">
        <thead>
          <tr className="cart-header">
            <th>Ürün Adı</th>
            <th>Miktar</th>
            <th>Fiyat</th>
            <th>Toplam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="cart-row">
              <td>{item.product.productName}</td>
              <td>{item.quantity}</td>
              <td>${item.product.unitPrice}</td>
              <td>${item.quantity * item.product.unitPrice}</td>
              <td>
                <button
                  onClick={() => removeFromCart(item.product)}
                  className="cart-remove-button"
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
