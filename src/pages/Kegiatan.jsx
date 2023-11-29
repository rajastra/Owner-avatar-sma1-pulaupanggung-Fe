import { kegiatan_data } from '../data';
import News from '../components/News';

const Kegiatan = () => {
  return (
    <div className="Container-news-page">
      <div className="header-container">
        <h3 className="heading-news">Kegiatan</h3>
        <div className="line">
          <hr className="line-header" />
          <hr className="line-sub-header" />
        </div>
      </div>

      <div className="section-news">
        {kegiatan_data.map((data) => {
          return <News {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
};
export default Kegiatan;
