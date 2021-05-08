/* eslint-disable import/no-anonymous-default-export */
import FullList from '../views/Attendees/FullList';

export default [
  {
    exact: true,
    path: '/fullList',
    component: FullList,
    icon: 'dashboard',
    title: 'Profile',
    children: []
  }
];
