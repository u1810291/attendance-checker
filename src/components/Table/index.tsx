

export default (props: any) => {
  return (
    <div>
      {props.headers ?
        <table>
          <thead>
            {console.log(props.headers)}
            <tr >
              {props.headers.map(({ header }: any, index: number) =>
                <th key={index + 1}>{header}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {props.data.map(({
              id,
              name,
              morning,
              first_check,
              secon_check,
              third_check,
              fourth_check,
              total_attends,
              total_absence,
              absence_hours
            }: any, index: number) =>
              <tr key={index + 1}>
                <td>
                  {id}
                </td>
                <td>
                  {name}
                </td>
                <td>
                  {morning}
                </td>
                <td>
                  {first_check}
                </td>
                <td>
                  {secon_check}
                </td>
                <td>
                  {third_check}
                </td>
                <td>
                  {fourth_check}
                </td>
                <td>
                  {total_attends}
                </td>
                <td>
                  {total_absence}
                </td>
                <td>
                  {absence_hours}
                </td>
              </tr>
            )}
          </tbody>
        </table> : null
      }
    </div >
  )
}
