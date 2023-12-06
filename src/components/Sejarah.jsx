import ProfileCard from './ProfileCard';
import { sejarah_data } from '../data';

const Sejarah = ({ sejarah }) => {
  return (
    <div className="container-sambutan">
      <ProfileCard header={'sejarah'} name="" key={sejarah?.id || sejarah_data[0].id} image={sejarah?.photo || sejarah_data[0].image} deskripsi={sejarah?.description || sejarah_data[0].deskripsi} />
    </div>
  );
};
export default Sejarah;
