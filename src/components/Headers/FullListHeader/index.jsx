/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Container } from './style';
import SingleDatePicker from '../../Forms/Inputs/SingleDatePicker'

export default ({ date, setDate}) => {
  return (
    <Container>
      <h4>Подразделение 42. развод</h4>
      <SingleDatePicker value={date} onChange={setDate}/>
    </Container>
  )
}
