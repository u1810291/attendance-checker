import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Header,
  TitleContainer,
} from './style';
import Logo from '../../../assets/icons/logo512.png';

const SidebarHeader = () => {
  const history = useHistory();
  const tabletDesktop = (
    <Header>
      <TitleContainer>
        <Logo className="pointer" onClick={() => { history.push('/profile'); }} />
      </TitleContainer>
    </Header>
  );
  return tabletDesktop
};

SidebarHeader.propTypes = {
  handleExpand: PropTypes.func.isRequired,
  handleCollapse: PropTypes.func.isRequired
};

export default SidebarHeader;
