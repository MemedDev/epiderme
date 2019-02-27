import styled from 'styled-components';

const buttonTextColor = color => (
  color === 'default' ? '#333' : 'white'
);

const StyledButton = styled.button`
  display: inline-block;
  min-width: 80px;
  padding: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;

  color: ${props => buttonTextColor(props.color)};
  background-color: ${props => props.theme[props.color]};

  &:hover,
  &:focus {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.08);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: ${props => props.theme.default};
    box-shadow: none;
    border: none;
    color: #333;
  }

  &:first-of-type,
  & + button {
    margin-right: 5px;
  }
`;

StyledButton.defaultProps = {
  color: 'default',
  theme: {
    default: '#ddd',
    primary: '#00BCEB',
    secondary: '#00d39c',
    success: '#2ECC40',
    danger: '#FF4136',
    warning: '#FFDC00',
    info: '#7FDBFF',
  },
};

export default StyledButton;
