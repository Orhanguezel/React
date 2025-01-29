import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 5px ${(props) => props.theme.primary};
  }

  &:disabled {
    background-color: ${(props) => props.theme.secondary};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  disabled: false,
};
