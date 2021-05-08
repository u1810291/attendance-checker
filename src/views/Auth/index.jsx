/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import moduleName from '../../services/auth'

export default ()=> {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
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
