import styled from "styled-components";

export const CategoryListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CategoryItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ $isActive }) => ($isActive ? "#007bff" : "transparent")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#000")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#0056b3" : "#f0f0f0")};
  }
`;


