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
import Login from './pages/Login';
import KelolaPost from './pages/KelolaPost';
import KelolaGuru from './pages/KelolaGuru';
import News from './pages/News';
import Kegiatan from './pages/Kegiatan';
import NewsDetail from './pages/NewsDetail';

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

    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'Profile',
        element: <Profile />,
      },
      {
        path: '/gurutendik',
        element: <GuruTendik />,
      },
      {
        element: <Struktur />,
        path: '/struktur',
      },
      {
        element: <News />,
        path: '/berita',
      },
      {
        element: <Kegiatan />,
        path: '/kegiatan',
      },
      {
        element: <NewsDetail />,
        path: '/berita/detail/:id',
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
    element: <Login />,
    path: '/login',
  },
  {
    element: <KelolaPost />,
    path: '/postingan',
  },
  {
    element: <KelolaGuru />,
    path: '/guruandtendik',
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
