import React, { useMemo } from 'react'
import Table from '../../../components/Table'
import { data, headers, links, footer } from './helper'

export default () => {
  const column = useMemo(() => headers, []);
  return (
    <div>
      <Table headers={column} data={data} links={links} footer={footer} />
    </div>
  )
}
