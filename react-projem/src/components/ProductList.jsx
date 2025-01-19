import PropTypes from "prop-types";
import "../styles/product.css";

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired, // Bu satırı ekleyin
};


export default function ProductList(props) {
 

  return (
    <div className="product-container">
      <h3 className="product-title">
        {props.info.title} - {props.currentCategory}
      </h3>

      <div className="product-table-container">
        <table className="product-table">
          <thead>
            <tr className="product-table-head">
              <th className="product-table-th">Product ID</th>
              <th className="product-table-th">Product Name</th>
              <th className="product-table-th">Quantity Per Unit</th>
              <th className="product-table-th">Unit Price ($)</th>
              <th className="product-table-th">Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product, index) => (
              <tr
                key={product.id}
                className={
                  index % 2 === 0 ? "product-row-even" : "product-row-odd"
                }
              >
                <td className="product-cell">{product.id}</td>
                <td className="product-cell">{product.productName}</td>
                <td className="product-cell">{product.quantityPerUnit}</td>
                <td className="product-cell">{product.unitPrice}</td>
                <td className="product-cell">{product.unitsInStock}</td>
                <td>
                  <button
                    onClick={() => props.addToCart(product)}
                    className="product-add-button"
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
