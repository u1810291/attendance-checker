import { Container, ImageWrap, Item, Image } from './style'

const Images = ({ data }: any) => (
  <Container>
    <Item>
      <ImageWrap>
        {console.log(data)}
        <Image src={data.default} />
      </ImageWrap>
    </Item>
  </Container>
)
export default Images
