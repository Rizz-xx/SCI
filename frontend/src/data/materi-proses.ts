/**
 * Data Perbandingan Proses Pencernaan: Mekanik vs Kimiawi
 * Kurikulum Biologi SMA Kelas XI
 */

export interface ProsesData {
  id: string
  nama: string
  slug: string
  definisi: string
  contohProses: string[]
  organTerlibat: string[]
  penjelasanLengkap: string
  perbedaanDenganLainnya: string
}

export const PROSES_DATA: ProsesData[] = [
  {
    id: 'pencernaan-mekanik',
    nama: 'Pencernaan Mekanik',
    slug: 'pencernaan-mekanik',
    definisi: 'Proses pemecahan fisik partikel makanan dari ukuran makroskopis yang besar dan kasar menjadi fragmen-fragmen yang jauh lebih kecil dan halus tanpa mengubah struktur kimia molekul penyusunnya.',
    contohProses: [
      'Mastikasi (pengunyahan) oleh gigi seri, taring, dan geraham di rongga mulut',
      'Deglutisi dan propulsi bolus melalui gerak peristaltik (gelombang kontraksi ritmis) pada esofagus',
      'Churning (pengadukan dan peremukan kuat) oleh tiga lapisan otot dinding lambung menghasilkan kimus',
      'Segmentasi (kontraksi osilasi otot sirkular usus halus) untuk mencampur makanan dengan enzim dan getah empedu',
      'Emulsifikasi lipid secara fisik oleh garam-garam empedu menjadi butiran misel mikroskopis'
    ],
    organTerlibat: [
      'Mulut (gigi dan lidah)',
      'Kerongkongan (otot esofagus)',
      'Lambung (lapisan otot sirkular, longitudinal, oblik)',
      'Usus Halus (gerak segmentasi)',
      'Kantung Empedu & Hati (emulsifikasi mekanis cairan empedu)'
    ],
    penjelasanLengkap: `Pencernaan mekanik merupakan langkah fisik krusial pertama dalam sistem pencernaan manusia. Tujuan utama dari proses ini bukan untuk menyerap nutrisi secara langsung, melainkan memperkecil dimensi fisik makanan secara radikal. Dengan hancurnya makanan menjadi jutaan partikel mini, total luas permukaan (surface area) bahan makanan yang terpapar ke lingkungan sekitar meningkat secara eksponensial. Rasio luas permukaan terhadap volume yang tinggi inilah yang memungkinkan enzim-enzim pencernaan hidrolitik bekerja secara cepat dan efisien pada langkah berikutnya.

Proses mekanik diawali di cavum oris (rongga mulut) melalui gerakan mastikasi terkoordinasi antara rahang bawah (mandibula), gigi, dan otot pipi serta lidah. Gigi seri memotong makanan, gigi taring merobek serat liat, dan gigi premolar serta molar menggilas makanan hingga menjadi partikel berukuran milimeter. Lidah secara dinamis membolak-balikkan partikel dan menekannya ke palatum (langit-langit mulut) untuk membentuk gumpalan kompak yang disebut bolus. Ketika ditelan, esofagus melanjutkan peran mekanik melalui gerak peristaltik, yaitu kontraksi otot sirkular di belakang bolus yang dipadukan dengan relaksasi otot di depannya, mengalirkan makanan secara searah menuju lambung.

Di dalam lambung, pencernaan mekanik mencapai intensitas tertingginya melalui gerakan memeras dan mengocok yang dikenal sebagai churning atau triturasi gastrik. Dinding lambung yang sangat berotot—tersusun atas tiga lapisan serat otot (longitudinal luar, sirkular tengah, dan oblik dalam)—berkontraksi ritmis sekitar 3 kali per menit. Gelombang peristaltik lambung bergerak dari fundus menuju antrum pilorus. Ketika gelombang mencapai pilorus yang tertutup sempit, isi makanan terpental kembali ke arah korpus lambung (efek retropulsi). Aksi pemerasan dan pembalikan yang berulang-ulang ini menghancurkan partikel padat menjadi suspensi kental homogen bernama kimus (chyme).

Perjalanan mekanik berlanjut di usus halus melalui gerakan segmentasi ritmis. Berbeda dari gerak peristaltik yang berfungsi mendorong makanan maju ke depan, segmentasi adalah kontraksi lokal terisolasi dari cincin otot polos sirkular yang membagi-bagi kimus menjadi segmen-segmen bolak-balik. Gerakan ini mencampurkan kimus secara intim dengan sekresi getah pankreas dan empedu, sekaligus menekan isi lumen ke permukaan mukosa berjonjot agar penyerapan berlangsung maksimal. Tidak kalah penting, garam empedu yang disekresikan hati bertindak sebagai deterjen biologis (surfaktan alami) yang mengemulsikan tetesan trigliserida besar menjadi jutaan butiran mikro (misel), suatu proses mekanis dispersi fase cair tanpa pemutusan ikatan ester kimia.`,
    perbedaanDenganLainnya: 'Pencernaan mekanik hanya mengubah wujud fisik, ukuran partikel, dan keadaan dispersi makanan tanpa memutuskan ikatan kovalen kimia apa pun. Sebaliknya, pencernaan kimiawi melibatkan reaksi hidrolisis berenergi dengan bantuan biokatalisator (enzim) yang secara spesifik memutus ikatan kovalen antar monomer sehingga molekul kompleks diubah menjadi senyawa sederhana yang dapat menembus membran sel.'
  },
  {
    id: 'pencernaan-kimiawi',
    nama: 'Pencernaan Kimiawi (Enzimatis)',
    slug: 'pencernaan-kimiawi',
    definisi: 'Proses perombakan struktur molekul nutrien makromolekul kompleks (karbohidrat, protein, lemak, dan asam nukleat) menjadi molekul monomer mikroskopis sederhana yang larut dan dapat diserap oleh sel melalui reaksi hidrolisis berkataliskan enzim pencernaan.',
    contohProses: [
      'Hidrolisis polisakarida (amilum) menjadi disakarida (maltosa) oleh amilase saliva dan amilase pankreas',
      'Denaturasi protein oleh asam klorida (HCl) serta pemotongan rantai polipeptida menjadi pepton oleh enzim pepsin di lambung',
      'Aktivasi zimogen tripsinogen menjadi tripsin aktif oleh enteropeptidase pada lumen usus',
      'Pemecahan oligopeptida menjadi asam amino bebas oleh tripsin, kimotripsin, karboksipeptidase, dan peptidase enterosit',
      'Hidrolisis trigliserida teremulsi menjadi asam lemak bebas dan 2-monogliserida oleh lipase pankreas',
      'Pemecahan disakarida menjadi monosakarida (glukosa, galaktosa, fruktosa) oleh maltase, laktase, dan sukrase pada brush border usus'
    ],
    organTerlibat: [
      'Mulut (kelenjar parotis, submandibularis, sublingualis penghasil ptialin)',
      'Lambung (sel parietal penghasil HCl dan chief cells penghasil pepsinogen)',
      'Pankreas (penghasil amilase, lipase, tripsinogen, kimotripsinogen, nuklease)',
      'Hati & Kantung Empedu (penyedia getah empedu pengatur lingkungan basa)',
      'Usus Halus (duodenum, jejunum, ileum dengan enzim brush border mikrovili)'
    ],
    penjelasanLengkap: `Pencernaan kimiawi merupakan inti biokimiawi dari keseluruhan proses nutrisi manusia. Molekul makanan alami yang kita konsumsi—seperti amilum gandum, serat otot hewani, maupun lemak minyak—memiliki ukuran makromolekul polimerik raksasa yang tidak mungkin dapat melintasi membran fosfolipid enterosit usus dan dinding kapiler darah. Oleh karena itu, tubuh mengandalkan serangkaian enzim hidrolase spesifik untuk memotong ikatan kimia kovalen intramolekul (seperti ikatan glikosidik, peptida, dan ester) dengan memanfaatkan molekul air (reaksi hidrolisis).

Aktivitas kimiawi dimulai sejak sedetik makanan menyentuh rongga mulut. Enzim amilase saliva (ptialin) yang disekresikan kelenjar ludah memecah amilum matang menjadi maltosa pada rentang pH optimum netral (6,8-7,0). Ketika bolus ditelan dan terendam di dalam getah lambung, kerja ptialin terhenti seketika oleh tingkat keasaman ekstrem yang dihasilkan asam klorida (HCl, pH 1,5-2,0). Namun, pH asam ini memicu lingkungan kerja ideal bagi enzim protease lambung: pepsinogen inaktif mengalami autokatalisis menjadi enzim pepsin aktif, yang dengan gesit memutuskan ikatan peptida aromatik pada rantai protein, menghasilkan peptida yang lebih pendek seperti proteosa dan pepton.

Panggung utama pencernaan kimiawi terjadi saat kimus memasuki duodenum (usus dua belas jari). Paparan kimus asam memicu pelepasan hormon sekretin yang merangsang pankreas menyemburkan larutan penyangga natrium bikarbonat (NaHCO3), menaikkan pH lumen menjadi basa ramah enzim (sekitar 7,5 hingga 8,2). Di bawah suasana netral-basa ini, getah pankreas melepaskan armada enzim hidrolitik paling lengkap: amilase pankreas meneruskan hidrolisis karbohidrat, lipase pankreas dibantu kolipase memotong ikatan ester lemak teremulsi menjadi asam lemak dan monogliserida, serta proenzim tripsinogen diaktifkan oleh enteropeptidase menjadi tripsin. Tripsin kemudian bertindak sebagai dirigen yang mengaktivasi kimotripsinogen dan prokarboksipeptidase menjadi pemotong protein yang sangat agresif.

Tahap akhir pencernaan kimiawi berlangsung tepat di permukaan membran apikal mikrovili sel usus (brush border enzymes). Enzim-enzim integral yang menempel pada mikrovili tidak dilepaskan ke dalam lumen bebas, melainkan menunggu substrat oligomer menyentuhnya secara langsung: maltase memecah maltosa menjadi 2 molekul glukosa; sukrase mengurai sukrosa menjadi glukosa dan fruktosa; laktase memecah laktosa (gula susu) menjadi glukosa dan galaktosa; sedangkan aminopeptidase serta dipeptidase merampungkan peptida kecil menjadi asam-asam amino bebas tunggal. Melalui transformasi kimiawi bertahap ini, seluruh nutrien kompleks berhasil diubah menjadi molekul dasar siap serap yang dapat langsung dimanfaatkan untuk respirasi seluler dan biosintesis tubuh.`,
    perbedaanDenganLainnya: 'Pencernaan kimiawi membutuhkan biokatalisator spesifik (enzim dan koenzim) serta sangat bergantung pada parameter fisiologis yang ketat seperti pH lingkungan (asam lambung vs basa usus), suhu optimal tubuh (37°C), dan keberadaan kofaktor. Setiap enzim hanya bekerja secara spesifik pada satu tipe ikatan kimia (teori lock and key / induced fit). Tanpa pencernaan kimiawi, makanan yang telah dikunyah sehalus apa pun tetap tidak akan pernah bisa diserap atau dimanfaatkan oleh sel-sel tubuh.'
  }
]
