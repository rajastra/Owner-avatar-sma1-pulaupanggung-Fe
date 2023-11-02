import icNews from '../assets/ic-news.png';
import icCalendar from '../assets/ic-calendar.png';

const News = ({ name, type, calendar }) => {
  return (
    <div className="container-news">
      <div className="news-list">
        <div className="news">
          <h5 className="header-news">{name}</h5>
          <div className="ic-news">
            <img className="icon-news" src={icNews} alt="icon news" />
            <span className="news-text">{type}</span>
          </div>
          <div className="ic-calendar">
            <img className="icon-calendar" src={icCalendar} alt="icon calendar" />
            <span className="calender-text">{calendar}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
