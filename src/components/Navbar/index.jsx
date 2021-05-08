/* eslint-disable import/no-anonymous-default-export */
import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  UserInfoContainer,
  PopupContainer,
  DropdownContainer,
  Item,
  Text,
  BellContainer,
  TextContainer,
  ImageWrapper
} from './style';
import Bell from '../Bell';
import { logout } from '../../redux/modules/auth/actions';

const Navbar = () => {
  const clickRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOnClick = (type) => {
    switch (type) {
    case 'profile':
      setIsOpen(false);
      history.push('/profile');
      break;
    case 'logout':
      setIsOpen(false);
      dispatch(logout());
      break;
    default:
      break;
    }
  };
  return (
    <Container>
        <BellContainer>
          <Bell  margin="0 18px" value="" />
        </BellContainer>
        <PopupContainer>
          <UserInfoContainer>
            <ImageWrapper
              style={{ cursor: 'pointer' }}
              ref={clickRef}
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
            </ImageWrapper>
              <DropdownContainer isOpen={isOpen}>
                <Item onClick={() => handleOnClick('profile')}>
                  <Text >Profile</Text>
                </Item>
                <Item onClick={() => handleOnClick('logout')}>
                  <Text >Log out</Text>
                </Item>
              </DropdownContainer>
            <TextContainer>
              <TextContainer.Name>First name</TextContainer.Name>
              <TextContainer.Email>Some name</TextContainer.Email>
            </TextContainer>
          </UserInfoContainer>
        </PopupContainer>
    </Container>
  );
};
export default Navbar;