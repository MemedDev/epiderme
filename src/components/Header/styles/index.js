import styled from 'styled-components';

import ColumnRight from './columnRight';
import ColumnLeft from './columnLeft';
import Title from './title';

const StyledHeader = styled.div`
  display: flex;
  padding-top: 2px;
  box-orient: horizontal;
  box-direction: normal;
  flex-direction: row;
`;

StyledHeader.ColumnRight = ColumnRight;
StyledHeader.ColumnLeft = ColumnLeft;
StyledHeader.Title = Title;


export default StyledHeader;
