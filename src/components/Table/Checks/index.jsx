/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import moment from 'moment'
import { Container, Image, Body } from './style';
import checkedIcon from '../../../assets/icons/checked.png';
import crossedIcon from '../../../assets/icons/crossed.png';

const Checked = (checked)=> (
  <Container>
    {console.log(checked.value.check)}
    {checked.value.check ?
      <Body><Image src={checkedIcon} /> {moment(new Date(checked.value.check)).format("HH:mm:ss")}</Body> :
      <Body><Image src={crossedIcon} />-</Body> }
  </Container>
)

export default Checked;