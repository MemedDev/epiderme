import styled, { css, keyframes } from 'styled-components';

const animations = {
  spin: keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `,
};

const Icon = styled.i.attrs(props => ({
  className: `md-icon-${props.name}`,
}))`
  display: inline-block;
  word-wrap: normal;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';

  ${props => props.size !== 'inherit' && css`
    font-size: ${props.theme.icons.sizes[props.size]};
  `}

  ${props => props.animation && css`
    line-height: 1px;
    animation: ${animations[props.animation]} 0.8s infinite linear;
  `}
`;

export default Icon;
