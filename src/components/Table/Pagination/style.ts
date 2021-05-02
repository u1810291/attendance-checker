import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
`

export const Link = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  margin: 0 4px;
  &:active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
  }
  &:focus {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
  }
  &:hover{
    background-color: #ddd;
  }
`