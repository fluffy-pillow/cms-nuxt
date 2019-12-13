import Cookies from 'js-cookie';

export default function ({ store, redirect })
{
  let token = Cookies.get('token')
  if (token === null || token === false) {
    return redirect('/login')
  }
}
