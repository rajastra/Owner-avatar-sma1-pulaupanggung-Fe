import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HomeLayoutWithNavbar, Landing, HomeLayoutWithoutNavbar } from './pages';
import Profile from './pages/Profile';

import Dashboard from './pages/Dashboard';
import Kelas from './pages/Kelas';

import Murid from './pages/Murid';

import Admin from './pages/Admin';

import GuruTendik from './pages/GuruTendik';
import Struktur from './pages/struktur';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutWithNavbar />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'Profile',
        element: <Profile />,
      },
    ],
  },
  {
    element: <Dashboard />,
    path: '/Dashboard',
  },
  {
    element: <Kelas />,
    path: '/kelas',
  },
  {
    element: <Murid />,
    path: '/murid',
  },
  {
    element: <Admin />,
    path: '/admin',
  },
  {
    element: <GuruTendik />,
    path: '/guru-tendik',
  },
  {
    element: <Struktur />,
    path: '/struktur',
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
