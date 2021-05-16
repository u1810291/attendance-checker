/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container } from './style'

const Checked = (checked)=> (
    checked.value && !Object.keys(checked.value).length ?
      <Container color="red">
        {Object.keys(checked.value).length}
      </Container>
      : <Container color="green">
          {console.log(Object.keys(checked.value).length)}
        {Object.keys(checked.value).length}
      </Container>
)

export default Checked;