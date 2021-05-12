/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import UserCell from './UserCell';
import Checked from './Checked';
import UserCellV2 from './UserCellV2';

export const headerMaker = (data) => data
  .filter(({ show }) => show)
  .map(({ type, ...rest }) => {
    if (type === 'user') {
      return {
        ...rest,
        Cell: ({ cell: value }) => <UserCell {...value} />
      };
    }
    if (type === 'userV2') {
      return {
        ...rest,
        Cell: ({ cell: { value } }) => <UserCellV2 {...value} />
      };
    }
    if (type === 'current') {
      return {
        ...rest,
        Cell: ({ cell: value  }) => <Checked {...value} />
      };
    }
    return rest;
  });
