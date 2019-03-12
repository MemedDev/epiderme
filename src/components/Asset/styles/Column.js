import styled from 'styled-components';

export default styled.div`
  padding-right: ${({ theme }) => theme.unit.space}px;

  ${props => props.content && `
    flex: 1;
    padding-right: 0;
  `}
`;
