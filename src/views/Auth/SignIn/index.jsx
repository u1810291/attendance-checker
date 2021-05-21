/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { login, verify } from '../../../redux/modules/auth/actions';
import { useDispatch } from 'react-redux';

export default ()=> {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({name, password}, (res)=>{
      if(res) {
        dispatch(verify(res.status))
        return window.location.replace('/list')
      }
    }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button>Кириш</button>
      </form>
    </div>
  )
}
