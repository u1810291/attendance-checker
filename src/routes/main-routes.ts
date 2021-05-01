import FullList from '../views/Attendees/FullList'
import List from '../views/Attendees/List'

export default [
  {
    exact: true,
    path: '/list',
    title: 'Attendance list',
    component: List
  },
  {
    exact: true,
    path: '/attendees',
    title: 'Attendees',
    component: FullList
  }

]