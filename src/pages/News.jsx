import News from '../components/News';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BackDrop from '../components/BackDrop';

const Berita = () => {
  const [newsData, setNewsData] = useState([]);
  const [filterNews, setFilterNews] = useState([]);
  const [loading, setLoading] = useState(true);
  // get value from like http://localhost:5173/berita?search=asfaf
  const location = useLocation();

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}/api/v1/beritas`);
        const data = await response.json();
        setNewsData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);


  useEffect(() => {
    const queryParameters = new URLSearchParams(location.search);
    const search = queryParameters.get('search');
    if (!search) {
      setFilterNews(newsData);
    } else {
      const filterData = newsData.filter((data) => {
        return data.title.toLowerCase().includes(search?.toLowerCase());
      });

      setFilterNews(filterData);
    }

  }, [newsData, location.search]);


  return (
    <>
      {loading && <BackDrop loading={loading} />}
      {!loading && <div className="Container-news-page">
        <div className="header-container">
          <h3 className="heading-news">Berita</h3>
          <div className="line">
            <hr className="line-header" />
            <hr className="line-sub-header" />
          </div>
        </div>
        {/* show jika tidak ada */
          filterNews.length === 0 && <div
            style={{ textAlign: 'center', marginTop: '20px' }}
          >Berita tidak ditemukan</div>
        }
        <div className="section-news">
          {filterNews.length !== 0 && filterNews.map((data) => (
            <Link to={`/berita/detail/${data.id}`} key={data.id}>
              <News name={data.title} type={'news'} photo={data.photo_url} />
            </Link>
          ))}
        </div>
      </div>}
    </>
  );
};
export default Berita;
