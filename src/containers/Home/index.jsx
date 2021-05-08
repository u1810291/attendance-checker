/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Container from '../../components/Container'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'

export default ()=> {
  return (
    <Container>
      <Content/>
      <Sidebar/>
    </Container>
  )
}
