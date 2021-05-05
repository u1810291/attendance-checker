import { Container } from './style';

const Icon = ({ data }: any) => {
  return (
    <Container>
      <table>
        <tr>
          <th>Жами ходимлар сони:</th>
          <td>{data.total}</td>
          <th>Ҳозирда иш жойида:</th>
          <td>{data.in_work}</td>
          <th>Ҳозирда иш жойида йуқ:</th>
          <td>{data.out_work}</td>
        </tr>
      </table>
    </Container>
  )
}

export default Icon