import { Container, ImageWrap, Item, Image } from './style'

const Images = ({ data }: any) => (
  <Container>
    {console.log(data.map((el: any) => el))}
    {data.map((el: any, index: number) => {
      <Item key={index + 1}>
        <span>{el}</span>
      </Item>
    })}
  </Container>
)
export default Images
