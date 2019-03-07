import styled from 'styled-components';

const Title = styled.div`
  margin-top: ${({ theme }) => theme.unit.extraSmall}px;

  &.withDivider {
    margin-bottom: ${({ theme }) => theme.unit.space}px;
    padding-bottom: ${({ theme }) => theme.unit.space}px;
    border-bottom: ${({ theme }) => theme.unit.extraSmall}px solid;
    border-bottom-color: ${({ theme, dividerColor }) => dividerColor || theme.palette.black.default};
  }
`;

export default Title;
