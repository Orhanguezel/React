import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => (props.mode === "dark" ? "#2d3748" : "#edf2f7")};
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CategoryListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CategoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#4c51bf" : "transparent")};
  color: ${(props) => (props.isActive ? "#ffffff" : "inherit")};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#4c51bf" : "#e2e8f0")};
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e53e3e;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: #c53030;
  }
`;

export const AddCategoryButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #3182ce;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2b6cb0;
  }
`;
