import News from '../components/News';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../components/BackDrop';

const Kegiatan = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}/api/v1/beritas`);
        const data = await response.json();
        setNewsData(data.data.filter((item) => item.Kategori.name === 'kegiatan'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {loading && <BackDrop loading={loading} />}
      {!loading && <>
        <div className="Container-news-page">
          <div className="header-container">
            <h3 className="heading-news" style={{
              marginBottom: '10px',
            }} >Kegiatan</h3>
            <div className="line">
              <hr className="line-header" />
              <hr className="line-sub-header" />
            </div>
          </div>

          {newsData.length === 0 && <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}> <p>Tidak ada data kegiatan</p></div>}
          <div className="section-news">
            {newsData.length !== 0 && newsData.map((data) => (
              <Link to={`/berita/detail/${data.id}`} key={data.id}>
                <News name={data.title} type={'kegiatan'} photo={data.photo_url} />
              </Link>
            ))}
          </div>
        </div>
      </>}
    </>
  );
};
export default Kegiatan;
