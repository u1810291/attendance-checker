/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useMemo, useState } from 'react';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { useDispatch, useSelector } from 'react-redux';
import { getFullListData } from '../../../redux/modules/attendees/actions';
import { Container } from './style'
import FullListHeader from '../../../components/Headers/FullListHeader';

export default ()=> {
  const dispatch = useDispatch();
  const [sort, setSort] = useState();
  const { fullList, loading, error } = useSelector(state => state.attendeesReducer);
  const header = useSelector(({ tableReducer }) => tableReducer.fullListHeader);
  const headers = useMemo(() => headerMaker(header), [header]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [date, setDate] = useState(undefined)
  const dateFilter = useMemo(
    () => (date
      ? ({since: date.toISOString(), until:date && (new Date(date.setDate(date.getDate() + 1))).toISOString()})
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
    dispatch(getFullListData(query));
  },[query]);

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  return (
    <Container>
      <FullListHeader date={date} setDate={setDate}/>
      <Table
        pageIndex={pageIndex}
        pageSize={pageSize}
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
 