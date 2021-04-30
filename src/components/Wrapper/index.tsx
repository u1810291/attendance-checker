import React from 'react';
import { Dektop } from './style';

interface WrapperProps {
  children: any
}

const Wrapper: React.FC<WrapperProps> = ({ children }) =>
(
  <Dektop>
    {children}
  </Dektop>
)

export default Wrapper;