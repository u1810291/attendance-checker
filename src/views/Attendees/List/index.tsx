import { useMemo } from 'react'
import Table from '../../../components/Table'
import { headers, getData, links, footer } from './helper'


export default () => {
  const data = getData()
  const header = useMemo(() => headers, [])
  console.log(data)
  return (
    <div>
      <Table
        headers={header}
        data={data}
        links={links}
        footer={footer}
      />
    </div>
  )
}
