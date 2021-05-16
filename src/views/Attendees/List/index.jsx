/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useMemo, useState } from 'react';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { useDispatch, useSelector } from 'react-redux';
import { getMatchedFaces } from '../../../redux/modules/attendees/actions';
import { Container } from './style'
import ListHeader from '../../../components/Headers/ListHeader';

export default ()=> {
  const dispatch = useDispatch();
  const [sort, setSort] = useState();
  const { loading, error, faces } = useSelector(state => state.attendeesReducer);
  const header = useSelector(({ tableReducer }) => tableReducer.attendeesHeader)
  const headers = useMemo(() => headerMaker(header), [header])
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  // 2428 = in
  // 2429 = out
  const [date, setDate] = useState(undefined);
  const dateFilter = useMemo(
    () => (date
      ? ({ since:date.toISOString(), until: date && (new Date(date.setDate(date.getDate() + 1))).toISOString() })
      : ''),
    [date]
  );

  const query = useMemo(
    () => ({
      order:"DESC", 
      limit: 100, 
      face:{
        face_ids:[]
      },
      ...dateFilter,
      topics_by_modules:{
        "Kpx.Synesis.Faces":["FaceMatched"],
        "Kpx.Synesis.Hikvision":["FaceMatched"]
      }
    }),
    [dateFilter]
  );
  useEffect(()=>{
    dispatch(getMatchedFaces(query));
  },[query]);
  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };
  return (
    <Container>
      <ListHeader date={date} setDate={setDate}/>
      <Table 
        pageIndex={pageIndex}
        pageSize={pageSize}
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
