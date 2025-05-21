import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function signIn(email, pass) {
    console.log(email, pass);
  }

  async function logIn() {
    try {
      await signIn(email, pass);
      navigate('/articles');
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <div>LoginPage</div>
      {error && <p>{error}</p>}
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={logIn}>Login</button>
      <Link to='/create-account'>Create account</Link>
    </>
  );
}
