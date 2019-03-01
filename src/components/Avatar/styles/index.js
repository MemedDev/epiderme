import styled from 'styled-components';

const Avatar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.black.black24};
  border-radius: 50%;
  color: inherit;
  display: flex;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: inherit;
  height: 24px;
  justify-content: center;
  overflow: hidden;
  width: 24px;
`;

export default Avatar;
