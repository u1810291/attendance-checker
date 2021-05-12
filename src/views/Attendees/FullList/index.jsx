/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useMemo, useState } from 'react';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { useDispatch, useSelector } from 'react-redux';
import { getFullListData } from '../../../redux/modules/attendees/actions';
import { fullListHeader } from '../../../redux/modules/table/common';
import { Container } from './style'
import FullListHeader from '../../../components/Headers/FullListHeader';

export default ()=> {
  const dispatch = useDispatch();
  const [sort, setSort] = useState();
  const { data, fullList, loading, error } = useSelector(state => state.attendeesReducer);
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
    order:"DESC", 
    limit: 100, 
    face:{
      face_ids:[]
    },
    since: "2021-05-12T00:00:00.000Z", 
    until: "2021-05-13T23:59:59.000Z", 
    topics_by_modules:{
      "Kpx.Synesis.Faces":["FaceMatched"],
      "Kpx.Synesis.Hikvision":["FaceMatched"]
    }
  }
  useEffect(()=>{
    dispatch(getFullListData(requestData));
  },[]);

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  console.log(data);
  return (
    <Container>
      <FullListHeader />
      <Table
        data={fullList}
        sort={sort}
        query={query}
        loading={loading}
        error={error}
        header={headers}
        setSort={setSort}
        onChange={handleOnChange}
      />
    </Container>
  )
};
 