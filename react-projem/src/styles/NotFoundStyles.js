import styled from "styled-components";

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
  background-color: ${(props) =>
    props.mode === "dark" ? "#1a202c" : "#ffffff"};
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#1a202c")};
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => (props.mode === "dark" ? "#fc8181" : "#e53e3e")};
`;

export const NotFoundMessage = styled.p`
  font-size: 1.125rem;
  margin: 1rem 0;
  color: ${(props) => (props.mode === "dark" ? "#a0aec0" : "#718096")};
`;

export const BackLink = styled.a`
  font-size: 1rem;
  color: #3182ce;
  text-decoration: none;

  &:hover {
    color: ${(props) => (props.mode === "dark" ? "#63b3ed" : "#2b6cb0")};
    text-decoration: underline;
  }
`;
