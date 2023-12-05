const InfoSchool = ({ profile }) => {
  return (
    <div className="info-school">
      <h3 className="school-header">{profile?.name ? profile?.name : "SMAN 1 Pulau Panggung"}</h3>
      <p>
        {profile?.description ? profile?.description : "SMA N 1 Pulau Panggung merupakan salah satu Sekolah Menengah Atas Negri yang terletak di daerah Penantian, Pulau Panggung, Tanggamus Regency, Lampung 35379. Dengan visi yaitu , Mewujudkan SMA Negeri 1 Pulaupanggung : berkualitas, aktif dalam belajar dan kegiatan ekstrakurikuler, peduli dan berbudaya lingkungan bersih dan sehat berdasarkan iman dan taqwa."}
      </p>
    </div>
  );
};
export default InfoSchool;
