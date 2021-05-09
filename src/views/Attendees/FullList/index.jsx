/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useMemo, useState } from 'react';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/modules/attendees/actions';
import { fullListHeader } from '../../../redux/modules/table/common';

export default ()=> {
  const dispatch = useDispatch();
  const [sort, setSort] = useState();
  const { data, loading, error } = useSelector(state => state.attendeesReducer);
  const header = useSelector(({ tableReducer }) => tableReducer.fullListHeader);
  const headers = useMemo(() => headerMaker(header), [header]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const sortQuery = useMemo(() => {
    const found = sort && fullListHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  
  const query = useMemo(
    () => `&page=${pageIndex}&size=${pageSize}&${sortQuery}`,
    [pageIndex, pageSize, sortQuery]
  );
  
  const requestData = {
    facelist: { ids: [] },
    limit: 20,
    offset: 0,
    sort: "DESC",
    sort_field: "id"
  }
  
  useEffect(()=>{
    dispatch(fetchData(requestData));
  },[]);

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  return (
    <div>
      <Table 
        data={data}
        sort={sort}
        query={query}
        loading={loading} 
        error={error} 
        header={headers}
        setSort={setSort}
        onChange={handleOnChange}
      />
    </div>
  )
}
