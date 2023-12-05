import './GuruTendik.css';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function GuruTendik() {
  const [guruData, setNewsData] = useState([]);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${URL}/api/v1/teachers`);
        setNewsData(data.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="div">
      <Navbar></Navbar>
      <div className="heading">Guru & tendik</div>
      <div className="container-wrapper">
        <div className="content-section">
          {guruData?.map((item) => (
            <div className="card" key={item.id}>
              <img src={item?.photo} />
              <div className="desc">
                <p className="desc1">{item?.name}</p>
                <p className="desc2">{item?.jabatan}</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default GuruTendik;
