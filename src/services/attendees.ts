import axios from 'axios';

export default {
  getFaces: (data: any) => axios.post('api/v1/events/search', data)
}