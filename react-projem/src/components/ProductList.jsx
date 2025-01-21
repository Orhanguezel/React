
import "../styles/product.css";
import PropTypes from "prop-types";

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      quantityPerUnit: PropTypes.string,
      unitPrice: PropTypes.number,
      unitsInStock: PropTypes.number,
    })
  ).isRequired,
  currentCategory: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default function ProductList({ products, currentCategory, info, addToCart, mode }) {
  return (
    <div
      className={`product-container p-4 rounded ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h3 className="product-title">
        {info.title} - {currentCategory || "All Categories"}
      </h3>

      <div className="product-table-container">
        <table className="product-table w-full">
          <thead>
            <tr className={`product-table-head ${mode === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}>
              <th className="product-table-th p-2">Product ID</th>
              <th className="product-table-th p-2">Product Name</th>
              <th className="product-table-th p-2">Quantity Per Unit</th>
              <th className="product-table-th p-2">Unit Price ($)</th>
              <th className="product-table-th p-2">Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No products available.
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`${
                    index % 2 === 0
                      ? mode === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-white"
                      : mode === "dark"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <td className="product-cell p-2">{product.id}</td>
                  <td className="product-cell p-2">{product.productName}</td>
                  <td className="product-cell p-2">{product.quantityPerUnit}</td>
                  <td className="product-cell p-2">{product.unitPrice}</td>
                  <td className="product-cell p-2">{product.unitsInStock}</td>
                  <td>
                    <button
                      onClick={() => addToCart(product)}
                      className={`product-add-button p-2 rounded ${
                        mode === "dark" ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
                      } hover:bg-blue-700`}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
