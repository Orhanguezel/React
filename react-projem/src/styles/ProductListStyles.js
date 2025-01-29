import styled from "styled-components";

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  width: 200px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
`;

export const AddToCartButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

