import FullList from '../views/Attendees/FullList'
import List from '../views/Attendees/List'

export default [
  {
    exact: true,
    path: '/list',
    title: 'Ходимлар',
    component: List
  },
  {
    exact: true,
    path: '/attendees',
    title: 'Умумий',
    component: FullList
  }

]