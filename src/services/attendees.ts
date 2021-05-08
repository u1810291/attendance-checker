import axios from 'axios';
import { fullList } from './selectors'

export default {
  getFaces: (data: any) => axios.post('api/v1/faces/search', data)
}