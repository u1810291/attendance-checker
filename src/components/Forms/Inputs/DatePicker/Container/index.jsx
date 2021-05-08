/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import moment from 'moment';

import {
  Container,
  DateRange,
  TabletAndDesktopContainer,
  Line,
  ClockRange,
  DateContainer,
  FromTo,
  Close,
  ButtonContiner
} from './style';
import PrimaryButton from '../../../../Buttons/Primary';

export default ({
  selectionRange,
  isPopoverOpen,
  handleSelect,
  rangeChange,
  setIsPopoverOpen,
  startDate,
  endDate,
  handleOnExpand,
  handleOnClear,
  right,
  showTimePicker = true
}) => {
  const content = (
    <Container showTimePicker={showTimePicker}>
      <DateRange
        ranges={[selectionRange]}
        onChange={(e) => rangeChange(e)}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        color="red"
        editableDateInputs={false}
        rangeColors={['#0062ff']}
      />
      {!showTimePicker && (
        <ButtonContiner>
          <PrimaryButton
            size="small"
            type="button"
            title="Clear"
            onClick={handleOnClear}
            style={{
              maxWidth: '71px',
              width: '100%',
              height: '43px',
              borderRadius: '8px',
              fontWeight: '400',
              alignSelf: 'flex-end'
            }}
          />
          <PrimaryButton
            size="small"
            type="button"
            title="Set"
            onClick={handleSelect}
            style={{
              maxWidth: '71px',
              width: '100%',
              height: '43px',
              borderRadius: '8px',
              fontWeight: '400',
              alignSelf: 'flex-end'
            }}
          />
        </ButtonContiner>
      )}
      {showTimePicker && (
        <>
          <Line />
          <ClockRange>
            <Close onClick={() => setIsPopoverOpen(false)} />
            <FromTo>
              <FromTo.Title>From</FromTo.Title>
              <DateContainer>
                <DateContainer.Day>
                  {moment(startDate).format('D')}
                </DateContainer.Day>
                <DateContainer.Month>
                  {moment(startDate).format('MMM YYYY')}
                </DateContainer.Month>
              </DateContainer>
            </FromTo>
            <FromTo>
              <FromTo.Title>To</FromTo.Title>
              <DateContainer>
                <DateContainer.Day>
                  {moment(endDate).format('D')}
                </DateContainer.Day>
                <DateContainer.Month>
                  {moment(endDate).format('MMM YYYY')}
                </DateContainer.Month>
              </DateContainer>
            </FromTo>
            <ButtonContiner>
              <PrimaryButton
                size="small"
                type="button"
                title="Clear"
                onClick={handleOnClear}
                style={{
                  maxWidth: '71px',
                  width: '100%',
                  height: '43px',
                  borderRadius: '8px',
                  fontWeight: '400',
                  alignSelf: 'flex-end'
                }}
              />
              <PrimaryButton
                size="small"
                type="button"
                title="Set"
                onClick={handleSelect}
                style={{
                  maxWidth: '71px',
                  width: '100%',
                  height: '43px',
                  borderRadius: '8px',
                  fontWeight: '400'
                }}
              />
            </ButtonContiner>
          </ClockRange>
        </>
      )}
    </Container>
  );

  return (
      <TabletAndDesktopContainer right={right} open={isPopoverOpen}>
        {content}
      </TabletAndDesktopContainer>
    );
};
