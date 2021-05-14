/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container, Image } from './style'
import checkedIcon from '../../../assets/icons/checked.png'
import crossedIcon from '../../../assets/icons/crossed.png'

const Checked = (checked)=> (
  <Container>
    {checked.value.value ?
      <div><Image src={checkedIcon} /> {checked.value.check}</div> :
      <div><Image src={crossedIcon} /> {checked.value.check}</div>}
  </Container>
)

export default Checked;