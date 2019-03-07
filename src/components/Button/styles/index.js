import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  line-height: 32px;
  padding: 0 ${({ theme }) => theme.unit.space2}px;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default}px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  letter-spacing: ${({ theme }) => theme.typography.button.letterSpacing};
  text-transform: ${({ theme }) => theme.typography.button.textTransform};
  text-align: center;
  text-decoration: none;

  ${props => props.aspect === 'button' && css`
    color: ${props.theme.palette[props.color].text};
    background-color: ${props.theme.palette[props.color].main};

    &:hover,
    &:focus {
      background-color: ${props.theme.palette[props.color].darken};
    }
  `}

  ${props => props.aspect === 'link' && css`
    color: ${props.theme.palette.accent.main};
    background-color: transparent;

    &:active {
      background-color: ${props.theme.palette.black.black12};
    }
  `}

  &:disabled {
    color: ${({ theme }) => theme.palette.default.text};
    background-color: ${({ theme }) => theme.palette.default.main};
    box-shadow: none;
    border: none;
    opacity: 0.7;
    cursor: not-allowed;
  }

  & + & {
    margin-left: ${({ theme }) => theme.unit.space2}px;
  }
`;

export default Button;
