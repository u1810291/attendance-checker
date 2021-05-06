import { Container, ImageWrap, Item, Image } from './style'

const Images = ({ data }: any) => (
  <Container>
    <Item>
      <ImageWrap>
        {console.log(data)}
        <img src={data.default} />
      </ImageWrap>
    </Item>
  </Container>
)
export default Images
