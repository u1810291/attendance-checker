/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Container } from './style';
import SingleDatePicker from '../../Forms/Inputs/DatePicker';

export default ({ date, setDate}) => {
  return (
    <Container>
      <h4>Подразделение 42. развод</h4>
      <SingleDatePicker 
        right
        placeholder="Date"
        name="rangeDate1"
        value={date}
        change={(value) => setDate(value)}
        showTimePicker={false}
        dateFormat="YYYY-MM-DD"
        date={date}
        white
      />
    </Container>
  )
}
