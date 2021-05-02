import { Container, ImageWrap, Item, Image } from './style'

const Images = ({ data }: any) => {
  return (
    <Container>
      <ImageWrap>
        {console.log(data)}
        {data.map((el: any) => Object.values(el).map((item: any, index: number) =>
          <Item key={index + 1}>
            {Object.keys(data)[index] === 'image' ? <Image src={item} /> : item}
          </Item>
        ))}
      </ImageWrap>
    </Container>
  )

}
export default Images
