import styled from 'styled-components';

export const Container = styled.div`

  background: white;
  margin: 10px;
  height: 96%;
  width: 98%;
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 20px 1fr;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  word-break: break-all;  
  background: #f4f7fc;
  overflow-y: auto;
  overflow-x: auto;

`;
