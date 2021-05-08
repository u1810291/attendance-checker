import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Container, Title, IconContainer, SubElements, SubElement
} from './style';

const Item = ({
  title, path, icon, collapsed, elements
}) => {
  const [hovered, setHovered] = useState(false);
  const isActive = (checkPath) => window.location.pathname.includes(checkPath);
  const history = useHistory();
  return (
    <>
      <Container
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => history.push(path)}
      >
        <IconContainer collapsed={collapsed} active={isActive(path)}>
        </IconContainer>
        <Title
          active={isActive(path)}
          hovered={hovered}
          collapsed={collapsed}
        >
          {title}
        </Title>
      </Container>
      <SubElements expand={!collapsed && isActive(path)}>
        {elements.map(
          (child, index) => !child.hidden && (
            <SubElement
              key={`${index + 1}`}
              active={isActive(child.path)}
              onClick={() => history.push(`${path}${child.path}`)}
            >
              <Title >{`- ${child.title}`}</Title>
            </SubElement>
          )
        )}
      </SubElements>
    </>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired
};

export default Item;