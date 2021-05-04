import { Container, Image } from './style';
import crossed from '../../../assets/icons/crossed.png'
import checked from '../../../assets/icons/checked.png'

const Images = ({ data }: any) => (
  <Container>
    { console.log(data)}
    {data === 'yes' ?
      < Image src={checked} /> :
      <Image src={crossed} />
    }
  </Container>
)
export default Images
