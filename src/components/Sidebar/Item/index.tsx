import { Container } from './style';
import { useHistory } from 'react-router-dom'

const Item = ({ title, path }: any) => {
  const history = useHistory()
  return (
    <Container onClick={() => history.push(path)}>
      {title}
    </Container>
  )
}

export default Item;