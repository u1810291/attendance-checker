import { Container, ImageWrap } from './style'

const Images = ({ data }: any) => {
  return (
    <Container>
      <ImageWrap>
        {data.map((el: any) => Object.values(el).map((item) => item))}
      </ImageWrap>
      <img src="https://demo.kipod.com/api/v1/faces/17282/images/266292/image?imghash=2cd66178e44a59847b6bd1b08ce78ca8" />
    </Container>
  )

}
export default Images
