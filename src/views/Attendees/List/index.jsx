/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect} from 'react';
import Table from '../../../components/Table';
import {useDispatch} from 'react-redux'
import {fetchData} from '../../../redux/modules/attendees/actions'

export default ()=> {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (
    <div>
      List
    </div>
  )
}
