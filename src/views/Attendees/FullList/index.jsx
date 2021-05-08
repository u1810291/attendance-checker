/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {useDispatch} from 'react-redux';
import moduleName from '../../../redux/modules/'

export default ()=> {
  const dispatch = useDispatch();
  
  return (
    <div>
      Full list
    </div>
  )
}
