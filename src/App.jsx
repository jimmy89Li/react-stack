import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage, { articleLoader } from './pages/ArticlePage';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/articles',
        element: <ArticlesListPage />,
      },
      {
        path: '/articles/:name',
        element: <ArticlePage />,
        loader: articleLoader,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/create-account',
        element: <CreateAccountPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
