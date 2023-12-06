import { misi_data } from '../data';
import MisiCard from './MisiCard';

const VisiMisi = ({ visi, misi }) => {
  const misiList = misi?.description.split('\r\n').map((statement) => statement.replace(/-/g, '')).map(misi => {
    return { misi };
  }) || misi_data;

  return (
    <div className="container-visi-misi">
      <div className="header-profile-card">
        <div className="border-profile-card">
          <h4 className="header-profile-card">Visi dan Misi</h4>
        </div>
      </div>
      <div className="visi-sekolah">
        <div className="header-visi">
          <span className="header-visi-text">Visi</span>
        </div>
        <div className="deskripsi-visi">
          <p className="dekskripsi-visi-paragraph">{visi?.description || 'Mewujudkan SMA Negeri 1 Pulaupanggung : berkualitas, aktif dalam belajar dan kegiatan ekstrakurikuler, peduli dan berbudaya lingkungan bersih dan sehat berdasarkan iman dan taqwa'}.</p>
        </div>
      </div>
      <div className="misi-sekolah">
        <div className="header-misi">
          <span className="header-visi-text">Misi</span>
        </div>
        <div className="section-misi">
          {misiList.map((data, index) => {
            return <MisiCard {...data} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default VisiMisi;
