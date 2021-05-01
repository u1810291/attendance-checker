import Image from './Image'

export default ({ headers, data }: any) => {
  return (
    <div>
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
    </div >
  )
}
