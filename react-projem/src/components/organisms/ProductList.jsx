import { ProductListContainer } from "../../styles/ProductListStyles";
import ProductCard from "../molecules/ProductCard";
import PropTypes from "prop-types";

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      productName: PropTypes.string.isRequired,
      quantityPerUnit: PropTypes.string,
      unitPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      unitsInStock: PropTypes.number,
    })
  ).isRequired,
};

export default function ProductList({ products }) {
  
  if (!products || products.length === 0) {
    return <p>No products available for this category.</p>;
  }

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
}
