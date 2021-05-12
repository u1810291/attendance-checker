/* eslint-disable import/no-anonymous-default-export */
import FullList from '../views/Attendees/FullList';
import List from '../views/Attendees/List';
import PeopleList from '../views/Attendees/PeopleList';

export default [
  {
    exact: true,
    path: '/list',
    component: List,
    icon: 'dashboard',
    title: 'Рўйхат',
    children: []
  },
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
    path: '/people',
    component: PeopleList,
    icon: 'dashboard',
    title: 'Ходимлар',
    children: []
  }
];
