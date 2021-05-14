/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container, Image } from './style'
import checkedIcon from '../../../assets/icons/checked.png'
import crossedIcon from '../../../assets/icons/crossed.png'

const Checked = (checked)=> (
  <Container>
    {checked.value ?
      <Image src={checkedIcon} /> :
      <Image src={crossedIcon} />}
  </Container>
)

export default Checked;