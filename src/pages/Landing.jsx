import landing_profile from '../assets/landing profile.jpg';
import InfoCards from '../components/InfoCards';
import InfoSchool from '../components/InfoSchool';
import Akreditasi from '../components/Akreditasi';
import Motivate from '../components/Motivate';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BackDrop from '../components/BackDrop';

export const Banner = ({ profile }) => {
  return (
    <section className="main">
      <div className="main-banner">
        <img className="landing-profile" src={profile?.photo ? profile?.photo : landing_profile} alt="" />
      </div>
    </section>
  );
};

const Landing = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [akreditasi, setAkreditasi] = useState();
  const [motivasi, setMotivasi] = useState();


  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/profiles`
        );
        // set data with code 001
        setProfile(data?.data?.data.find((item) => item.code === '001'));
        setAkreditasi(data?.data?.data.find((item) => item.code === '007'));
        setMotivasi(data?.data?.data.find((item) => item.code === '008'));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getProfile();
  }
    , []);

  return (
    <>
      {loading && <BackDrop loading={loading} />}
      {!loading &&
        <>
          <Banner profile={profile} />
          <InfoSchool profile={profile} />
          <InfoCards />
          <Akreditasi akreditasi={akreditasi} />
          {/* <Newslist />
      <NewsKegiatanList /> */}
          <Motivate motivasi={motivasi} />
          {/* <Footer /> */}
        </>}
    </>
  );
};

export default Landing;
