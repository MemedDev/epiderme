import styled, { css } from 'styled-components';

const StyledText = styled.p`
  text-align: ${props => props.align};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme, scale }) => theme.typography[scale].fontSize};
  line-height: ${({ theme, scale }) => theme.typography[scale].lineHeight};
  letter-spacing: ${({ theme, scale }) => theme.typography[scale].letterSpacing};
  font-weight: ${({ theme, weight }) => weight !== 'inherit' && theme.typography.weights[weight]};

  ${props => props.color === 'default' && css`
    color: ${props.theme.typography.color};
  `}

  ${props => /(primary|accent)/gi.test(props.color) && css`
    color: ${props.theme.palette[props.color].main};
  `}

  ${props => /black/gi.test(props.color) && css`
    color: ${props.theme.palette.black[props.color]};
  `}
`;

export default StyledText;
