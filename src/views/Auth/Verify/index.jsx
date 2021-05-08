/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useHistory } from 'react-router-dom';

export default ()=> {
  const history = useHistory();
  return (
    <div>
      <button onClick={()=>history.push('/lists')}>Тасдиклаш</button>
    </div>
  )
}
