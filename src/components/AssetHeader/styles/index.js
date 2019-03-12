import styled from 'styled-components';

const AssetHeader = styled.div``;

AssetHeader.IconContainer = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.black.black50};
  margin-top: ${({ theme }) => theme.unit.small}px;
  margin-right: -${({ theme }) => theme.unit.small}px;
`;

export default AssetHeader;
