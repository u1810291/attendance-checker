import Cookies from 'universal-cookie';

export function getCookie(name: string) {
  const cookies = new Cookies();
  console.log(cookies.get('asddsa'));
}
