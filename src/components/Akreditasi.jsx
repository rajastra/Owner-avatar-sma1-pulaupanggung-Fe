import image from '../assets/akreditasi.jpg';

const Akreditasi = ({ akreditasi }) => {
  return (
    <section className="akreditasi">
      <div className="container-akreditasi">
        <div className="banner-akreditasi">
          <img className="image-akreditasi" src={akreditasi?.photo ? akreditasi?.photo : image} alt="akreditasi" />
        </div>
        <div className="info-akreditasi">
          {akreditasi?.description ? akreditasi?.description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo tenetur odit assumenda, minus esse reiciendis maxime asperiores blanditiis dignissimos sapiente id hic cupiditate expedita, in nisi! Accusamus facere ducimus dolorum tenetur libero iusto inventore delectus aliquam, fugiat eligendi repellat. Aliquam nulla incidunt doloribus illo modi quasi, dolore consequuntur vel facere vero iusto excepturi nemo dicta quod itaque rem laboriosam dolores ipsum quibusdam. Quaerat quisquam vitae vel magnam nobis inventore eos quia odio, iste ipsa nemo, voluptatum ipsum maxime reprehenderit laudantium explicabo, quam dolorem quo. Provident eum expedita alias delectus dignissimos blanditiis temporibus qui, repellat, laudantium minus facere libero saepe!'}
        </div>
      </div>
    </section>
  );
};

export default Akreditasi;
