/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Container, Content, Image, Quality } from './style';


const UserCell = (props) => {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return(
  <Container>
    <Content>
      <Image src={props.value} alt="image"/>
      <Quality>{Math.ceil(getRandomInt(100))}%</Quality>
    </Content>
  </Container>
);}

export default UserCell;
