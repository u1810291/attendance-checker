import types from '../../../constants/action-types';

export const attendeesHeader = [
  {
    id: 1,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Id',
    accessor: 'id'
  },
  {
    id: 2,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'images count',
    accessor: 'images',
    type:'user'
  },
  {
    id: 3,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'first_name',
    accessor: 'first_name'
  },
  {
    id: 4,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'avatar_image_id',
    accessor: 'avatar_image_id'
  },
  {
    id: 5,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'last_name',
    accessor: 'last_name'
  },
  {
    id: 6,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'list_id',
    accessor: 'list_id'
  }
];

export const fullListHeader = [
  {
    id: 1,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Id',
    accessor: 'id'
  },
  {
    id: 2,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'images count',
    accessor: 'images',
    type:'user'
  },
  {
    id: 3,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'first_name',
    accessor: 'first_name'
  },
  {
    id: 4,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'avatar_image_id',
    accessor: 'avatar_image_id'
  },
  {
    id: 5,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'last_name',
    accessor: 'last_name'
  },
  {
    id: 6,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'list_id',
    accessor: 'list_id'
  }
];

export const genericTypes = [
  {
    key: types.ATTENDEES_HEADER,
    headerName: 'attendeesHeader'
  },
  {
    key: types.FULL_LIST_HEADER,
    headerName: 'fullListHeader'
  }
];
