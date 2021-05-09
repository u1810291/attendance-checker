/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useMemo } from 'react';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../redux/modules/attendees/actions'

export default ()=> {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.attendeesReducer);
  const header = useSelector(({tableReducer}) => tableReducer.attendeesHeader)
  const headers = useMemo(() => headerMaker(header), [header])
  const requestData = {
    facelist: { ids: [] },
    limit: 20,
    offset: 0,
    sort: "DESC",
    sort_field: "id"
  }
  useEffect(()=>{
    dispatch(fetchData(requestData))
  },[])
  return (
    <div>
      <Table data={data} loading={loading} error={error} header={headers} />
    </div>
  )
}
