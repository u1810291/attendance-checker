/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { login, verify } from '../../../redux/modules/auth/actions';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../../../components/Buttons';
import { NormalInput, PasswordInput } from '../../../components/Forms/Inputs'
import { Container, FormContainer } from './style'

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
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <NormalInput 
          value={name}
          name="name"
          white
          size="medium"
          placeholder="Username"
          onChange={(e)=>setName(e.target.value)} />
        <PasswordInput 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          name="password"
          white
          size="medium"
          placeholder="Password"
        />
        <PrimaryButton title="Кириш" size="large" type="submit"/>
      </FormContainer>
    </Container>
  )
}
