import styled from 'styled-components'

export const Main = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-area: sidebar;
`

export const Wrap = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 98vh;
  margin: 0;
  padding: 0;
`
export const Head = styled.div`
  background: #FAEBD7;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Body = styled.div`
  
  background: #F0F8FF;
`
export const Footer = styled.div`
  background: #F5F5DC;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`