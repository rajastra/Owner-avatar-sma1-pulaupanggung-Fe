import FasilitasCard from './FasilitasCard';
import { fasilitas_data } from '../data';

const Fasilitas = () => {
  return (
    <div className="container-fasilitas">
      <div className="header-profile-card">
        <div className="border-profile-card">
          <h4 className="header-profile-card">Visi dan Misi</h4>
        </div>
      </div>
      <div className="section-fasilitas">
        {fasilitas_data.map((data) => {
          return <FasilitasCard {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
};
export default Fasilitas;
