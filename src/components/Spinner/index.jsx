/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Container, Spinner, SpinnerBlack } from './style';


export default (props) => (
  <Container {...props}>
    {props.black
      ? <SpinnerBlack />
      : <Spinner />}
  </Container>
);
