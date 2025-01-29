import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const Sidebar = styled.aside`
  width: 250px;
  padding: 1rem;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;
