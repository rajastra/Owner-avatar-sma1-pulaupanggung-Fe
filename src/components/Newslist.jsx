import { news_data } from '../data';
import News from './News';
import waveUp from '../assets/wave-up.png';
import waveDown from '../assets/wave-down.png';
import news from '../assets/news.png';

const Newslist = () => {
  return (
    <div className="container-news">
      <div className="header-news">
        <img className="wave-news-up" src={waveUp} alt="wave" />
        <div className="header-container">
          <h3 className="header-news">Berita Terkini</h3>
          <div className="line">
            <hr className="line-header" />
            <hr className="line-sub-header" />
          </div>
        </div>
      </div>
      <div className="content-news">
        {/* <div className="logo-news">
          <img className="news-image" src={news} alt="" />
        </div> */}
        <div className="section-news">
          {news_data.map((data) => {
            return <News {...data} key={data.id} />;
          })}
        </div>
      </div>
      <img className="wave-news-up" src={waveDown} alt="wave" />
    </div>
  );
};
export default Newslist;
