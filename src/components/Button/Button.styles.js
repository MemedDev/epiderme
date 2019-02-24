import styled from 'styled-components';

const buttonTextColor = color => (
  color === 'default' ? '#333' : 'white'
);

const Button = styled.button`
  display: inline-block;
  min-width: 80px;
  padding: 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease;

  background-color: ${props => props.theme[props.color]};
  color: ${props => buttonTextColor(props.color)};

  &:hover,
  &:focus {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.08);
  }

  &:first-of-type,
  & + button {
    margin-right: 5px;
  }
`;

Button.defaultProps = {
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

export { Button };
