import { useMemo } from 'react'
import Table from '../../../components/Table'
import { headers, data, links, footer } from './helper'
export default () => {
  const header = useMemo(() => headers, [])
  return (
    <div>
      <h1>List</h1>
      <Table
        headers={header}
        data={data}
        links={links}
        footer={footer}
      />
    </div>
  )
}
