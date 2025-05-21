import { Link } from 'react-router';

export default function NavBar() {
  const isLoggedIn = true;
  const email = '';

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/articles'>Articles</Link>
        </li>
        {email && <li>{email}</li>}
        <li>
          {isLoggedIn ? <button>Log out</button> : <button>Login</button>}
        </li>
      </ul>
    </nav>
  );
}
