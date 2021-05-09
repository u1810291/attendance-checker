/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Container, Content, Image, Quality } from './style';


const UserCell = (props) => (
  <Container>
    <Content>
      <Image src={props.image_thumbnail} alt="image"/>
      <Quality>{Math.ceil(props.quality * 100)}%</Quality>
    </Content>
  </Container>
);

export default UserCell;
