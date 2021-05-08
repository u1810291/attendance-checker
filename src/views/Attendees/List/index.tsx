import { useMemo } from 'react'
import Table from '../../../components/Table'
import { headers, data, getData, links, footer } from './helper'
import { useDispatch } from 'react-redux'

export default () => {
  const filter = getData()
  const header = useMemo(() => headers, [])
  console.log(filter)
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
