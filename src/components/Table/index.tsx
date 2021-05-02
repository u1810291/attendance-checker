import Image from './Image'
import Pagination from './Pagination'
import { Container } from './style'

export default ({ headers, data, links }: any) => {
  return (
    <Container>
      <table>
        <thead>
          <tr >
            {headers.map(({ header }: any, index: number) =>
              <th key={index + 1}>{header}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: number) =>
            <tr key={index + 1}>
              {Object.values(row).map((el: any, idx: number) =>
                <td key={idx + 1}>
                  {headers[idx].type === 'image' ?
                    <Image data={el} /> : el}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      {data.length > 2 ?
        <Pagination links={links} />
        : null
      }
    </Container>
  )
}
