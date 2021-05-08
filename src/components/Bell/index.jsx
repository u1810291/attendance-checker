import React from 'react';
import PropTypes from 'prop-types';
import { Container, Bell } from './style';

const BellComponent = ({ Component, margin, value }) => (
  <Container margin={margin}>
    {Component}
    <Bell >
      {value}
    </Bell>
  </Container>
);

BellComponent.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  margin: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

BellComponent.defaultProps = {
  margin: '0 0'
};

export default BellComponent;
