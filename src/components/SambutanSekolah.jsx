import { sambutan_data } from '../data';
import ProfileCard from './ProfileCard';

const SambutanSekolah = () => {
  return (
    <div className="container-sambutan">
      {sambutan_data.map((data) => {
        return <ProfileCard {...data} key={data.id} />;
      })}
    </div>
  );
};
export default SambutanSekolah;
