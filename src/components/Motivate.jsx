import bgMotivate from '../assets/bg-motivate.png';
import motivator from '../assets/motivator.png';

const Motivate = () => {
  return (
    <div className="container-motivate">
      <div className="image-motivate">
        <img src={motivator} alt="motivasi" />
      </div>

      <h3 className="quote">“ Saya belum gagal. Saya baru saja menemukan 10.000 cara yang tidak akan berhasil”</h3>
    </div>
  );
};
export default Motivate;
