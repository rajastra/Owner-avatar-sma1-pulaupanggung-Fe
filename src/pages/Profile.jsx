import Fasilitas from '../components/Fasilitas';
import SambutanSekolah from '../components/SambutanSekolah';
import Sejarah from '../components/Sejarah';
import VisiMisi from '../components/VisiMisi';
import axios from 'axios';
import BackDrop from '../components/BackDrop';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [sambutan, setSambutan] = useState({});
  const [sejarah, setSejarah] = useState({});
  const [visi, setVisi] = useState({});
  const [misi, setMisi] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/profiles`
        );
        // set data with code 001
        setSambutan(data?.data?.data.find((item) => item.code === '003'));
        setSejarah(data?.data?.data.find((item) => item.code === '004'));
        setVisi(data?.data?.data.find((item) => item.code === '005'));
        setMisi(data?.data?.data.find((item) => item.code === '006'));
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
      {!loading && <>
        <SambutanSekolah
          sambutan={sambutan}
        />
        <Sejarah sejarah={sejarah} />
        <VisiMisi visi={visi} misi={misi} />
        <Fasilitas />
      </>}
    </>
  );
};
export default Profile;
