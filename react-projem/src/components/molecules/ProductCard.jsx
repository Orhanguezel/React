import {
  ProductCard as StyledProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToCartButton,
} from "../../styles/ProductListStyles";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <StyledProductCard>
      <ProductImage src={product.image} alt={product.productName} />
      <ProductName>{product.productName}</ProductName>
      <ProductPrice>${product.unitPrice}</ProductPrice>
      <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
    </StyledProductCard>
  );
}
