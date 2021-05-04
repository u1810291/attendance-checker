import { Container, IconWrapper } from './style'
import Checked from '../../../assets/icons/checked.png'
import Crossed from '../../../assets/icons/cross.png'

const Icon = ({ data }: any) => {
  return (
    <Container>
      {console.log("Icon", data)}
      {data === 'yes' ?
        <IconWrapper src={Checked} /> :
        <IconWrapper src={Crossed} />
      }
    </Container>
  )
}

export default Icon