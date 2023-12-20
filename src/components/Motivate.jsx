import motivator from '../assets/motivator.png';

const Motivate = ({ motivasi }) => {
  return (
    <div className="container-motivate">
      <div className="image-motivate">
        <img src={motivasi?.photo ? motivasi?.photo : motivator} alt="motivasi" />
      </div>

      <h3 className="quote">{motivasi?.description ? motivasi?.description : '“ Saya belum gagal. Saya baru saja menemukan 10.000 cara yang tidak akan berhasil”'}</h3>
    </div>
  );
};
export default Motivate;
