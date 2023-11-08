import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayoutWithNavbar = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';

  return (
    <>
      <Navbar />
      <section className="page">{isPageLoading ? <div className="loading" /> : <Outlet context={{ value }} />}</section>
    </>
  );
};
export default HomeLayoutWithNavbar;
