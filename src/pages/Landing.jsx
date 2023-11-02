import landing_profile from '../assets/landing profile.jpg';
import InfoCard from '../components/InfoCard';
import InfoCards from '../components/InfoCards';
import InfoSchool from '../components/InfoSchool';

import Akreditasi from '../components/Akreditasi';
import News from '../components/News';
import Newslist from '../components/Newslist';

import NewsKegiatanList from '../components/NewsKegiatanList';

import Motivate from '../components/Motivate';
import Footer from '../components/Footer';

export const Banner = () => {
  return (
    <section className="main">
      <div className="main-banner">
        <img className="landing-profile" src={landing_profile} alt="" />
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <>
      <Banner />
      <InfoCards />
      <InfoSchool />
      <Akreditasi />
      <Newslist />
      <NewsKegiatanList />
      <Motivate />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
