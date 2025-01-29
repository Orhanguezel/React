import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { Nav, StyledNavLink, ToggleButton } from "../../styles/NavbarStyles";

export default function Navbar() {
  const { mode, toggleMode } = useTheme();
  const { cart } = useCart();

  return (
    <Nav mode={mode}>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/products">Products</StyledNavLink>
      <StyledNavLink to="/cart">Cart ({cart.length})</StyledNavLink>
      <ToggleButton onClick={toggleMode}>
        {mode === "light" ? "🌙" : "☀️"}
      </ToggleButton>
    </Nav>
  );
}
