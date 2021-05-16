/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container, Cell } from './style'

const Checked = (checked)=> (
  <Container>
    {console.log(checked)}
    {!Object.keys(checked.value).length ?
      <Cell/> :""}
  </Container>
)

export default Checked;