import styled from 'styled-components';

export default styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.unit.space}px;
  margin-right: -${({ theme }) => theme.unit.space}px;
`;
