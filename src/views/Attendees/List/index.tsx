import { useMemo } from 'react'
import Table from '../../../components/Table'
import { headers, data } from './helper'
export default () => {
  const header = useMemo(() => headers, [])
  return (
    <div>
      <h1>List</h1>
      <Table headers={header} data={data} />
    </div>
  )
}
