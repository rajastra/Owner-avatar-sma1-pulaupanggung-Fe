import { info_data } from '../data';
import InfoCard from './InfoCard';

const InfoCards = () => {
  return (
    <div className="section-center">
      {info_data.map((data) => {
        return <InfoCard {...data} key={data.id} />;
      })}
    </div>
  );
};

export default InfoCards;
