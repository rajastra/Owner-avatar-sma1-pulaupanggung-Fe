import { news_data } from '../data';
import News from '../components/News';

const Berita = () => {
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
        {news_data.map((data) => {
          return <News {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
};
export default Berita;
