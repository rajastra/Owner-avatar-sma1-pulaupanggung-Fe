const FasilitasCard = ({ image, fasilitas }) => {
  return (
    <div className="fasilitas-container">
      <div className="image-fasilitas">
        <img className="img-fasilitas" src={image} alt="" />
      </div>
      <div className="type-fasilitas">
        <span className="name-fasilitas">{fasilitas}</span>
      </div>
    </div>
  );
};
export default FasilitasCard;
