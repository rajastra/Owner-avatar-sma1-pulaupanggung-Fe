import News from '../components/News';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Berita = () => {
  const [newsData, setNewsData] = useState([]);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/api/v1/beritas`);
        const data = await response.json();
        setNewsData(data.data);
        console.log(data.title);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Container-news-page">
      <div className="header-container">
        <h3 className="heading-news">Berita</h3>
        <div className="line">
          <hr className="line-header" />
          <hr className="line-sub-header" />
        </div>
      </div>

      <div className="section-news">
        {newsData.map((data) => (
          <Link to={`/berita/detail/${data.id}`} key={data.id}>
            <News name={data.title} type={'news'} photo={data.photo_url} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Berita;
