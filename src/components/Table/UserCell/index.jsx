/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Container, Content, Image, Quality } from './style';


const UserCell = (props) => (
  <Container>
    <Content>
      <Image src={props.image_thumbnail} alt="image"/>
      {console.log(props)}
      <Quality >{props.quality}</Quality>
    </Content>
  </Container>
);

export default UserCell;
