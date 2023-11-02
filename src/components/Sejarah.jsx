import { sejarah_data } from '../data';
import ProfileCard from './ProfileCard';

const Sejarah = () => {
  return (
    <div className="container-sambutan">
      {sejarah_data.map((data) => {
        return <ProfileCard {...data} key={data.id} />;
      })}
    </div>
  );
};
export default Sejarah;
