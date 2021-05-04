import { Container, ImageWrap, Item, Image } from './style'

const Images = ({ data }: any) => (
  <Container>
    {data.map((el: any, index: number) => {
      <Item key={index + 1}>
        {console.log(el)}
        <span>{el}</span>
      </Item>
    })}
  </Container>
)
export default Images
