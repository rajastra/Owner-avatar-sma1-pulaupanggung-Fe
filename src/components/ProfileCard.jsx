import kepalaSekolah from '../assets/kepala-sekolah.png';

const ProfileCard = ({ header, image, name, deskripsi }) => {
  return (
    <div className="container-profile-card">
      <div className="header-profile-card">
        <div className="border-profile-card">
          <h4 className="header-profile-card">{header}</h4>
        </div>
      </div>
      <div className="content-profile-card">
        <div className="kepala-sekolah-profile-card">
          <div className="image-profile-card">
            <img className="img-profile-card" src={image} alt="" />
          </div>
          <div className="name-profile-card">
            <span className="name-kepala-sekolah">{name}</span>
          </div>
        </div>
        1
        <div className="deskripsi-profile-card">
          <p>{deskripsi}</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
