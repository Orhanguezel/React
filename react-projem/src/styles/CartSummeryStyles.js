import styled from "styled-components";

export const CartButton = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 16rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  background-color: ${(props) => (props.mode === "dark" ? "#2d3748" : "#ffffff")};
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};
  border: 1px solid
    ${(props) => (props.mode === "dark" ? "#4a5568" : "#e2e8f0")};
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid
    ${(props) => (props.mode === "dark" ? "#4a5568" : "#e2e8f0")};

  &:last-child {
    border-bottom: none;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e53e3e;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: #c53030;
  }
`;

export const EmptyCartMessage = styled.p`
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${(props) => (props.mode === "dark" ? "#a0aec0" : "#718096")};
`;

export const GoToCartButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => (props.mode === "dark" ? "#2b6cb0" : "#3182ce")};

  &:hover {
    background-color: ${(props) => (props.mode === "dark" ? "#2c5282" : "#2b6cb0")};
  }
`;
