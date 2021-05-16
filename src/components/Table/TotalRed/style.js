import styled from 'styled-components';

export const Container = styled.div`
  background: ${({color})=>color};
  width: 100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
`