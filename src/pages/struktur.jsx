import Bagan from '../assets/bagan.jpg'
import './Struktur.css'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useState, useEffect } from 'react';
import BackDrop from '../components/BackDrop';

function Struktur() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/profiles`
        );
        // set data with code 001
        setProfile(data?.data?.data.find((item) => item.code === '002'));
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
      {!loading && <div className='div'>
        <Navbar></Navbar>
        <div className='heading'>STRUKTUR KEPENGURUSAN</div>
        <img className="bagan-struktur" src={profile?.photo ? profile?.photo : Bagan} alt="Struktur"></img>
      </div>
      }
    </>
  )
}

export default Struktur

