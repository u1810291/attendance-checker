import React from 'react';
import { Container, Content } from './style';


const UserCell = ({ name, role, image }) => (
  <Container>
    <Content>
      <span >{name}</span>
      <span >{role}</span>
    </Content>
  </Container>
);

export default UserCell;
