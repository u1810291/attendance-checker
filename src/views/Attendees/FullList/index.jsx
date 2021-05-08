/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../../redux/modules/attendees/actions'

export default ()=> {
  const dispatch = useDispatch();
  const { data } = useSelector((state)=>state.attendeesReducer)
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  console.log(data)
  return (
    <div>
      Full list
    </div>
  )
}
