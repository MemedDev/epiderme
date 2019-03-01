import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  min-width: 80px;
  padding: ${({ theme }) => theme.unit.space2}px;
  border-radius: ${({ theme }) => theme.borderRadius.default}px;
  border: none;
  outline: none;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;

  color: ${({ theme, variant }) => theme.palette[variant].text};
  background-color: ${({ theme, variant }) => theme.palette[variant].main};

  &:hover,
  &:focus {
    background-color: ${({ theme, variant }) => theme.palette[variant].darken};
    box-shadow: ${({ theme }) => theme.shadows[1]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: ${({ theme }) => theme.palette.default.main};
    box-shadow: none;
    border: none;
    color: ${({ theme }) => theme.palette.default.text};
  }

  &:first-of-type,
  & + button {
    margin-right: 5px;
  }
`;

export default Button;
