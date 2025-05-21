import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <>
      <h1>ERROR!</h1>
      <p>The link you followed to get gere must be broken...</p>
      <Link to='/'>Go back home</Link>
    </>
  );
}
