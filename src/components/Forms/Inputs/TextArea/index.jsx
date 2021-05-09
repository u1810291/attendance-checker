/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
  Container, InnerContainer, Helper, TextArea
} from './style';

export default ({
  placeholder,
  disabled,
  size,
  helperText,
  type,
  ...others
}) => (

  <Container>
    <InnerContainer>
      <TextArea
        type={type}
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        {...others}
      />
    </InnerContainer>
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>

);
