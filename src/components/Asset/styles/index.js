import styled from 'styled-components';

import Column from './Column';

const Asset = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: ${({ theme }) => theme.unit.space3}px;
  padding-bottom: ${({ theme }) => theme.unit.space2}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black.black08};
`;

Asset.Column = Column;

export default Asset;
