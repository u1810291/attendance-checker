import { useHistory } from 'react-router'

export default () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/list')}>Токен қабул қилинди</button>
    </div>
  )
}
