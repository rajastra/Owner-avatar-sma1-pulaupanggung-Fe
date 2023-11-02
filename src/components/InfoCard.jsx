import img from '../assets/murid.png';

const InfoCard = ({ image, count, type }) => {
  return (
    <div className="card-container">
      <img className="info-image" src={image} alt="" />
      <h1 className="info-count">{count}</h1>
      <h4 className="info-type">{type}</h4>
    </div>
  );
};
export default InfoCard;
