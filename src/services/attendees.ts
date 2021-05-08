import axios from 'axios';
import { fullList } from './selectors'

export default {
  getFaces: (data: any) => fullList(axios.post('api/v1/faces/search', data)),
  getAttendees: (data: any) => fullList(axios.post('api/v1/events/search', data))
}