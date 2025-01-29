import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) =>
    props.mode === "dark" ? "#2d3748" : "#edf2f7"};
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};
`;

export const EmptyCartMessage = styled.h2`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeaderRow = styled.tr`
  background-color: ${(props) =>
    props.mode === "dark" ? "#4a5568" : "#e2e8f0"};
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};
`;

export const TableRow = styled.tr`
  background-color: ${(props) =>
    props.isEven
      ? props.mode === "dark"
        ? "#4a5568"
        : "#ffffff"
      : props.mode === "dark"
      ? "#2d3748"
      : "#edf2f7"};
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};

  &:hover {
    background-color: ${(props) =>
      props.mode === "dark" ? "#4a5568" : "#e2e8f0"};
  }
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid
    ${(props) => (props.mode === "dark" ? "#4a5568" : "#e2e8f0")};
  text-align: left;
`;

export const RemoveButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => (props.mode === "dark" ? "#c53030" : "#e53e3e")};

  &:hover {
    background-color: ${(props) =>
      props.mode === "dark" ? "#9b2c2c" : "#c53030"};
  }
`;

export const CartListContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

export const CartTotal = styled.div`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: right;
`;
