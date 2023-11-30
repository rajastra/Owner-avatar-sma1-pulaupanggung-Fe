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

  console.log(guruData)


  return (
    <div className="div">
      <Navbar></Navbar>
      <div className="heading">Guru</div>
      <div className="container-wrapper">
        <div className="content-section">
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
        </div>
      </div>
      <div className="heading">Tenaga Pendidik</div>
      <div className="container-wrapper">
        <div className="content-section">
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.animaapp.com/projects/6524cf5b3785a3243553e2bc/releases/6543dffab94153f1f0e66882/img/image-3.png" />
            <div className="desc">
              <p className="desc1">Lilis Barokah, S.Si.</p>
              <p className="desc2">Waka Sekolah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuruTendik;
