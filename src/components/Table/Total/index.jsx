/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container } from './style'

const Checked = (checked)=> (
    !Object.keys(checked.value[0]).length ?
      <Container color="red">
        {console.log(checked)}
        {Object.keys(checked.value[0]).length}
      </Container>
      :
      <Container color="green">
        {Object.keys(checked.value[0]).length}
      </Container>
)

export default Checked;