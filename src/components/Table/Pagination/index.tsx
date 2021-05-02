import React from 'react'
import { Container, Link } from './style'

export default ({ links }: any) => {
  return (
    <Container>
      <Link href="#">&laquo;</Link>
      {links && links.map((el: string, index: number) => (
        <Link key={index + 1} href={el}>{index + 1}</Link>
      ))}
      <Link href="#">&raquo;</Link>
    </Container>
  )
}
