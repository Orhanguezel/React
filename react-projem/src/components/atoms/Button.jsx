import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  background-color: ${(props) =>
    props.variant === "primary" ? props.theme.primary : props.theme.secondary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? props.theme.accent : props.theme.primary};
    color: ${(props) => props.theme.background};
  }

  &:disabled {
    background-color: ${(props) => props.theme.secondary};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default function Button({ children, onClick, variant, disabled }) {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};
