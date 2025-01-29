import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin: 0 1rem;
  padding: 0.5rem;

  &.active {
    color: ${(props) => props.theme.accent};
    border-bottom: 2px solid ${(props) => props.theme.accent};
  }

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
