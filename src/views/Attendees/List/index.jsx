/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useMemo, useState } from 'react';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, getMatchedFaces } from '../../../redux/modules/attendees/actions';
import { attendeesHeader } from '../../../redux/modules/table/common';
import { Container } from './style'
import ListHeader from '../../../components/Headers/ListHeader';

export default ()=> {
  const dispatch = useDispatch();
  const [sort, setSort] = useState();
  const { data, loading, error, faces } = useSelector(state => state.attendeesReducer);
  const header = useSelector(({ tableReducer }) => tableReducer.attendeesHeader)
  const headers = useMemo(() => headerMaker(header), [header])
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  // 2428 = in
  // 2429 = out
  const sortQuery = useMemo(() => {
    const found = sort && attendeesHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  
  const query = useMemo(
    () => `&page=${pageIndex}&size=${pageSize}&${sortQuery}`,
    [pageIndex, pageSize, sortQuery]
  );
  
  const faceParams = {
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
    dispatch(getMatchedFaces(faceParams));
  },[]);
  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };
  return (
    <Container>
      <ListHeader/>
      <Table 
        faces={data}
        data={faces}
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
}
