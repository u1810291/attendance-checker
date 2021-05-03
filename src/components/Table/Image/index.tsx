import { Container, ImageWrap, Item, Image } from './style'

const Images = ({ data }: any) => (
  <Container>
    {Object.values(data).map((el: string | any, index: number) => {
      <Item key={index + 1}>
        <span>{el}</span>
      </Item>
    })}
  </Container>
)
export default Images
