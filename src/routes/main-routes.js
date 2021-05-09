/* eslint-disable import/no-anonymous-default-export */
import FullList from '../views/Attendees/FullList';
import List from '../views/Attendees/List';

export default [
  {
    exact: true,
    path: '/fullList',
    component: FullList,
    icon: 'dashboard',
    title: 'Умумий рўйхат',
    children: []
  },
  {
    exact: true,
    path: '/list',
    component: List,
    icon: 'dashboard',
    title: 'Рўйхат',
    children: []
  }
];
