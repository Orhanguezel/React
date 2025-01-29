import { CartListContainer, CartItem, CartTotal, RemoveButton } from "../../styles/CartListStyles";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

export default function CartList({ cart }) {
  const { dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toast.error(`${product.productName} sepetten çıkarıldı.`);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  return (
    <CartListContainer>
      {cart.map((item) => (
        <CartItem key={item.id}>
          <span>{item.productName}</span>
          <span>{item.quantity}</span>
          <span>${item.unitPrice}</span>
          <RemoveButton onClick={() => removeFromCart(item)}>Sil</RemoveButton>
        </CartItem>
      ))}
      <CartTotal>Total: ${totalPrice}</CartTotal>
    </CartListContainer>
  );
}
