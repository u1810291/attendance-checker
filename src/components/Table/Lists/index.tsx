import { Container, Item } from './style'

const Images = ({ data }: any) => (
  <Container>
    {data.map((el: any, index: number) => (
      <Item key={index + 1}>
        {el}
      </Item>
    ))}
  </Container>
)
export default Images