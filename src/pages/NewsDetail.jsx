import news from '../assets/news.png';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState({});
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/api/v1/beritas/${id}`);
        const data = await response.json();
        setNewsDetails(data.data);
        console.log(data.data);
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="news-detail-container">
      <h1 className="news-detail-title">{newsDetails.title}</h1>
      <img src={newsDetails.photo_url} alt={newsDetails.title} className="news-detail-photo" />
      <p className="news-detail-description">{newsDetails.description}</p>
    </div>
  );
};
export default NewsDetail;
