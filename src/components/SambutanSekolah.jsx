import kepalaSekolah from '../assets/kepala-sekolah.png';

const SambutanSekolah = ({ sambutan }) => {
  return (
    <div className="container-sambutan">
      <div className="container-profile-card">
        <div className="header-profile-card">
          <div className="border-profile-card">
            <h4 className="header-profile-card">Sambutan</h4>
          </div>
        </div>
        <div className="content-profile-card">
          <div className="kepala-sekolah-profile-card">
            <div className="image-profile-card">
              <img className="img-profile-card" src={sambutan?.photo || kepalaSekolah} alt="" />
            </div>
            <div className="name-profile-card">
              <span className="name-kepala-sekolah">Drs. H. Sasmadi</span>
            </div>
          </div>

          <div className="deskripsi-profile-card">
            <p>{sambutan?.description || 'Assalamualaikum Warahmatullohi Wabarokatuh Pertama-tama yang patut kita ucapkan adalah bersyukur dihadapan Allah SWT, Tuhan Yang Mahakuasa atas karunia yang telah diberikan kepada kita semua, sehingga sampai saat ini masih\
            bisamelaksanakan tugas-tugas mulia yang Insya Allah dilakukan dengan penuh ketulusan, keikhlasan dan dedikasi. Pada kesempatan ini kami menyampaikan ucapan terima kasih kepada semua stakeholders SMAN1 Pulaupanggung,\
            KabupatenTanggamus Provinsi Lampung yang telah berbagi pemikiran dan informasi untuk kemajuan mutu sekolah. SMAN1 Pulaupanggung merupakan salah satu wadah bagi putra putri Indonesia dalam mengisi dan membentuk pikiran-pikirannya\
            agarmenjadi manusia yang berilmu sekaligus memiliki ahlak mulia. Pendidikan merupakan kunci bagi pengembangan diri pribadi anak-anak kita, sedangkan pendidikan di lingkungan keluarga merupakan bagian yang tidak terpisahkan\
            daripendidikan formal. Pesan pada anak-anak semua dan pemuda-pemudi Indonesia berupayalah meningkatkan kemampuan berpikir dengan cara menimba ilmu sebanyak-banyaknya agar kelak dapat memberikan nilai tambah bagi peningkatan\
            hidupkeluarga. Sejalan dengan globlisasi yang tidak terbendung lagi saat ini, kemajuan teknologi informasi memegang peran vital. Kecanggihan teknologi dapat menjalin komunikasi yang baik antara sekolah, masyarakat dan\
            pemerintah. Olehsebab itu SMAN1 Pulaupanggung membuka diri melalui website sekolah ini sebagai jawaban tuntutan kemajuan teknologi. Website ini diharapkan dapat menjalin komunikasi untuk dapat menyampaikan dan mensosialisasikan\
            program sertakebijakan sekolah sesuai tuntutan masa kini. Hal ini juga dalam rangka mewujudkan sekolah yang bersih , sehat, asri, nyaman, aman, toleran, transparan, akuntabel dan berintegritas. Akhirnya semoga website ini dapat\
            diterima danmarilah kita melaksanakan tugas mulia ini dengan sungguh-sungguh, seraya berdoa semoga Allah Subhanahu Wa Taala melindungi kita semua, Amin. Wassalamualaikaum Warrahmatulohi Wabarokatuh Drs. H.Sasmadi'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SambutanSekolah;
