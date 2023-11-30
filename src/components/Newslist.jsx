import waveUp from '../assets/wave-up.png';
import waveDown from '../assets/wave-down.png';
import news from '../assets/news.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import News from '../components/News';
import { Link } from 'react-router-dom';

const Newslist = () => {
  const [newsData, setNewsData] = useState([]);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${URL}/api/v1/beritas`);
        setNewsData(data.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-news">
      <div className="header-news">
        <img className="wave-news-up" src={waveUp} alt="wave" />
        <div className="header-container">
          <h3 className="heading-news">Berita Terkini</h3>
          <div className="line">
            <hr className="line-header" />
            <hr className="line-sub-header" />
          </div>
        </div>
      </div>
      <div className="content-news">
        <div className="logo-news">
          <img className="news-image" src={news} alt="" />
        </div>
        <div className="section-news">
          {newsData.map((data) => (
            <Link to={`/berita/detail/${data.id}`} key={data.id}>
              <News name={data.title} type={'news'} photo={data.photo_url} />
            </Link>
          ))}
        </div>
      </div>
      <img className="wave-news-up" src={waveDown} alt="wave" />
    </div>
  );
};
export default Newslist;
