import CartList from "../components/organisms/CartList";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Sepet</h1>
      <CartList cart={cart} />
    </div>
  );
}
