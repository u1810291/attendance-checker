import { Container, IconWrapper } from './style'

const Icon = ({ data }: any) => {
  return (
    <Container>
      <IconWrapper {...data} />
    </Container>
  )
}

export default Icon