import React, { useMemo } from 'react'
import Table from '../../../components/Table'
import { data, columns } from './helper'

export default () => {
  const column = useMemo(
    () => columns,
    []
  );
  return (
    <div>
      <h1>Full list</h1>
      <Table />
    </div>
  )
}
