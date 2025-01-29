import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

export const ProductCard = styled.div`
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.primary};
`;
