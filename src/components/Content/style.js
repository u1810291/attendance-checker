import styled from 'styled-components';

export const Container = styled.div`

  background: white;
  margin: 10px;
  height: 96%;
  width: 80vw;
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 20px 1fr;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  padding: 0 10px;
  margin-right: 20px;
  word-break: break-all;  
  background: #f4f7fc;
  overflow-y: auto;
  overflow-x: auto;

`;
