/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container, Image } from './style'
import checkedIcon from '../../../assets/icons/checked.png'
import crossedIcon from '../../../assets/icons/crossed.png'

const Checked = (checked)=> (
  <Container>
    {checked.value.check.length ?
      <div><Image src={checkedIcon} /> {checked.value.check.value}</div> :
      <div><Image src={crossedIcon} /> {checked.value.check.value}</div>}
  </Container>
)

export default Checked;