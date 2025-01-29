import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#ffffff",
  text: "#1a202c",
  primary: "#3182ce",
  secondary: "#e2e8f0",
  accent: "#2b6cb0",
};

export const darkTheme = {
  background: "#1a202c",
  text: "#f7fafc",
  primary: "#63b3ed",
  secondary: "#2d3748",
  accent: "#3182ce",
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;
