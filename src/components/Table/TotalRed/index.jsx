/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container } from './style'

const Checked = (checked)=> (
    checked.value.filter(Boolean).length ?
       <Container color="red">
        {checked.value.filter(Boolean).length}
      </Container>
      :<Container>{checked.value.filter(Boolean).length}</Container>
)

export default Checked;