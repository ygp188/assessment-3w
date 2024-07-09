import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AdminPage from './components/pages/AdminPage';
import MainPage from './components/pages/MainPage';
import ProfilePage from './components/pages/ProfilePage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '/admin',
          element: <AdminPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
