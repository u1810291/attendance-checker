/* eslint-disable import/no-anonymous-default-export */
import React, { useRef, useState } from 'react';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  UserInfoContainer,
  PopupContainer,
  DropdownContainer,
  Item,
  Text,
  Header,
  BellContainer,
  TextContainer,
  ImageWrapper
} from './style';
import { Content } from '../style';
import Bell from '../Bell';
import { logout } from '../../../redux/modules/auth/actions';
import { ClickOutside } from '../../../hooks/click-outside';
import Icon from '../../Icon';
import SearchableInput from '../../Forms/Inputs/Search';

const Navbar = () => {
  const clickRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.userReducer);
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
      <Header>
        <SearchableInput placeholder="Search here..." size="small" />
      </Header>
      <Content>
        <BellContainer>
          <Bell Component={<Icon icon="notification_on" />} margin="0 18px" value="1" />
        </BellContainer>
        <PopupContainer>
          <UserInfoContainer>
            <ImageWrapper
              style={{ cursor: 'pointer' }}
              ref={clickRef}
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
            </ImageWrapper>
            <ClickOutside
              outClickRef={clickRef}
              outsideClicked={() => {
                setIsOpen(false);
              }}
            >
              <DropdownContainer isOpen={isOpen}>
                <Item onClick={() => handleOnClick('profile')}>
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Profile</Text>
                </Item>
                <Item onClick={() => handleOnClick('logout')}>
                  <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Log out</Text>
                </Item>
              </DropdownContainer>
            </ClickOutside>
            <TextContainer>
              <TextContainer.Name>{userInfo.username}</TextContainer.Name>
              <TextContainer.Email>{userInfo.email}</TextContainer.Email>
            </TextContainer>
          </UserInfoContainer>

        </PopupContainer>
      </Content>
    </Container>
  );
};
export default Navbar;