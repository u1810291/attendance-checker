/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect} from 'react';
import Table from '../../../components/Table';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../redux/modules/attendees/actions'

export default ()=> {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.attendeesReducer);
  
  const requestData = {
    facelist: { ids: [] },
    limit: 20,
    offset: 0,
    sort: "DESC",
    sort_field: "id"
  }
  console.log(requestData)
  useEffect(()=>{
    dispatch(fetchData(requestData))
  },[])
  console.log(data)
  return (
    <div>
      List
    </div>
  )
}
