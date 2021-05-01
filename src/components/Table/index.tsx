

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
              {Object.values(row).map((el: any, index: number) =>
                <td key={index + 1}>
                  {el}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div >
  )
}
