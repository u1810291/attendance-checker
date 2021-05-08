/* eslint-disable import/no-anonymous-default-export */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button, ToolTip, OptionButton, Container
} from './style';
import { ClickOutside } from '../../../hooks/click-outside';
import { useShowModal } from '../../../hooks/modal';


export default ({
  index, indexT, setIndexT, data, itemId, row
}) => {
  const [open, setOpen] = useState(false);
  const refClick = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((globalState) => globalState);
  const modal = useShowModal();
  return (
    <Container>
      <Button
        ref={refClick}
        onClick={() => {
          setIndexT(index);
          setOpen((prevState) => !prevState);
        }}
      >
      </Button>
      <ClickOutside
        outClickRef={refClick}
        outsideClicked={() => {
          setOpen(false);
        }}
      >
        <ToolTip index={index} indexT={indexT} open={open}>
          {data.map(({ name, icon, onClick: ItemClick }, positionIndex) => (
            <OptionButton
              onClick={() => ItemClick(itemId, {
                row,
                history,
                dispatch,
                state,
                ...modal
              })}
              key={`${positionIndex + 1}`}
            >
              <span>{name}</span>
            </OptionButton>
          ))}
        </ToolTip>
      </ClickOutside>
    </Container>
  );
};
