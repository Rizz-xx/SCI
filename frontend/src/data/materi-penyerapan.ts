/**
 * Data Mekanisme Penyerapan Nutrisi (Absorpsi)
 * Kurikulum Biologi SMA Kelas XI
 */

export interface ZatDiserap {
  nama: string
  mekanisme: string
  tujuan: string
}

export interface PenyerapanData {
  id: string
  judul: string
  deskripsi: string
  konten: string
  prosesVili: string
  zatYangDiserap: ZatDiserap[]
  penyaluranHasil: string
  faktaPenting: string[]
}

export const PENYERAPAN_DATA: PenyerapanData = {
  id: 'penyerapan-nutrisi',
  judul: 'Mekanisme Penyerapan Nutrisi (Absorpsi Sari Makanan)',
  deskripsi: 'Proses pemindahan molekul-molekul monomer nutrien sederhana, air, vitamin, dan elektrolit dari lumen saluran pencernaan menembus sel epitel enterosit usus menuju peredaran darah dan limfatik tubuh.',
  konten: `Penyerapan (absorpsi) sari makanan merupakan kulminasi fisiologis dari seluruh sistem pencernaan. Tanpa proses penyerapan yang efisien, pencernaan mekanik dan kimiawi yang memecah makanan tidak akan memberikan manfaat fungsional bagi kelangsungan hidup sel tubuh. Usus halus—khususnya jejunum dan ileum—merupakan lokasi utama di mana lebih dari 90% seluruh nutrien makanan, vitamin, dan air diserap masuk ke dalam sirkulasi internal.

Permukaan dalam usus halus dirancang secara anatomis sangat unik untuk mengatasi tantangan luas bidang penyerapan. Dinding usus tidak rata, melainkan membentuk lipatan spiral sirkular (plika sirkularis Kerckring). Pada lipatan tersebut tumbuh jutaan tonjolan mikroskopis menyerupai jari yang disebut vili intestinalis. Setiap sel enterosit di permukaan vili memiliki jutaan juluran sitoplasma apikal yang disebut mikrovili (brush border). Arsitektur berlipat ganda tiga tingkat ini memperluas area permukaan kontak usus hingga sekitar 200 hingga 300 meter persegi—setara dengan luas lapangan tenis tunggal.

Penyerapan nutrien melintasi membran sel epitel enterosit terjadi melalui berbagai mekanisme biofisika terkoordinasi: difusi sederhana, difusi terfasilitasi dengan protein pembawa (carrier-mediated), osmosis untuk molekul air, dan transpor aktif sekunder yang ditenagai oleh gradien elektrokimia ion natrium (pompa Na+/K+-ATPase). Monosakarida seperti glukosa dan galaktosa diserap masuk ke enterosit bersama ion Na+ melalui transporter SGLT-1, sedangkan fruktosa masuk melalui difusi terfasilitasi via GLUT-5. Asam amino bebas dan peptida pendek diserap melalui kotransporter asam amino-natrium dan transporter PEPT1.

Di sisi lain, produk pencernaan lemak (asam lemak bebas dan monogliserida) yang bersifat hidrofobik memerlukan jalur penyerapan khusus. Bersama garam empedu dan lesitin, lipid membentuk kelompok agregat bulat kecil yang disebut misel (micelles). Misel membawa molekul lipid mendekati permukaan membran enterosit, di mana asam lemak berdifusi menembus lapisan ganda lipid sel. Di dalam retikulum endoplasma enterosit, asam lemak dan monogliserida disintesis kembali (re-esterifikasi) menjadi trigliserida, lalu dibungkus oleh fosfolipid, kolesterol, dan protein apolipoprotein membentuk partikel lipoprotein bernama kilomikron.

Setelah menembus epitel usus, zat gizi terbagi ke dalam dua jalur distribusi utama: jalur pembuluh kapiler darah (sistem vena porta hepatika) untuk zat terlarut dalam air, dan jalur pembuluh kil / lakteal (sistem limfatik) untuk zat larut dalam lemak. Sisa materi yang tidak terserap di usus halus—seperti serat selulosa, air residu (sekitar 1-1,5 liter), dan mineral—akan melintasi katup ileosekal menuju usus besar (kolon). Kolon kemudian menyerap kembali sekitar 90% air residu tersebut melalui osmosis pasif yang mengikuti penyerapan aktif ion natrium, hingga akhirnya terbentuk massa feses padat yang siap diekskresikan.`,
  prosesVili: `Struktur vili dan mikrovili merupakan mahakarya efisiensi adaptasi biologis:

1. Lipatan Sirkular (Plika Kerckring):
Lipatan mukosa dan submukosa setinggi hingga 8 mm yang melingkar permanen di sepanjang lumen usus, memperlambat aliran kimus dan melipatgandakan luas permukaan hingga 3 kali lipat.

2. Vili Intestinalis:
Tonjolan mirip jari-jari beludru dengan tinggi 0,5–1,0 mm yang memadati dinding usus (mencapai 20–40 vili per milimeter persegi). Setiap vili dilapisi oleh selapis sel epitel kolumnar (enterosit) dan sel goblet pembuat mukus pelindung. Di dalam rongga inti setiap vili terdapat anyaman jala kapiler darah yang sangat rapat serta satu saluran pembuluh limfa buntu berdiameter lebih lebar yang disebut pembuluh kil (lakteal).

3. Mikrovili (Brush Border):
Juluran sitoplasma silindris mikroskopis berdiameter 0,1 mikrometer dan panjang 1 mikrometer yang berdiri tegak rapat di atas membran apikal setiap enterosit tunggal (sekitar 2.000 hingga 3.000 mikrovili per sel). Mikrovili mengandung matriks filamen aktin di dalamnya serta dilapisi glikokaliks kaya enzim (seperti laktase, sukrase, maltase, dan peptidase). Secara total, keberadaan mikrovili meningkatkan luas permukaan membran absorpsi sebesar 20 kali lipat tambahan, menghasilkan total luas difusi melebihi 200–250 m².`,
  zatYangDiserap: [
    {
      nama: 'Glukosa dan Galaktosa (Monosakarida)',
      mekanisme: 'Transpor Aktif Sekunder via SGLT-1 (Sodium-Glucose Cotransporter 1) yang memanfaatkan gradien konsentrasi Na+, dilanjutkan difusi terfasilitasi via GLUT-2 di membran basolateral ke kapiler darah',
      tujuan: 'Kapiler darah vili → Vena Mesenterika → Vena Porta Hepatika → Hati (sebagai sumber bahan bakar respirasi seluler instan atau disimpan sebagai glikogen)'
    },
    {
      nama: 'Fruktosa (Monosakarida Buah)',
      mekanisme: 'Difusi Terfasilitasi independen-natrium via protein pembawa GLUT-5 pada membran apikal enterosit, keluar via GLUT-2',
      tujuan: 'Kapiler darah vili → Vena Porta Hepatika → Hati (diubah menjadi glukosa atau glikogen)'
    },
    {
      nama: 'Asam Amino Bebas & Peptida Kecil',
      mekanisme: 'Transpor Aktif Sekunder berpasangan ion Na+ (kotranspor asam amino) dan transporter H+/peptida (PepT1) yang kemudian dihidrolisis peptidase sitosol menjadi asam amino bebas',
      tujuan: 'Kapiler darah vili → Vena Porta Hepatika → Seluruh sel tubuh (bahan baku biosintesis protein tubuh, enzim, antibodi, dan regenerasi jaringan)'
    },
    {
      nama: 'Asam Lemak Bebas & 2-Monogliserida',
      mekanisme: 'Pembentukan misel oleh garam empedu → Difusi pasif melintasi membran sel enterosit → Re-esterifikasi menjadi trigliserida di Retikulum Endoplasma → Pembungkusan menjadi partikel Kilomikron → Eksositosis',
      tujuan: 'Pembuluh Kil (Lakteal limfatik vili) → Pembuluh Limfa Intestinal → Duktus Torasikus → Masuk vena darah di Vena Subklavia Sinistra dekat jantung (disimpan di jaringan adiposa atau dimetabolisme di hati)'
    },
    {
      nama: 'Vitamin Larut Lemak (A, D, E, K)',
      mekanisme: 'Dilarutkan di dalam inti hidrofobik misel bersama lipid → Difusi pasif bersama lipid ke enterosit → Dikemas bersama trigliserida ke dalam kilomikron',
      tujuan: 'Pembuluh Kil (Lakteal limfatik) → Sirkulasi sistemik (disimpan di hati dan jaringan lemak tubuh untuk fungsi penglihatan, kalsifikasi tulang, antioksidan, dan pembekuan darah)'
    },
    {
      nama: 'Vitamin Larut Air (Vitamin C dan Ragam Vitamin B)',
      mekanisme: 'Sebagian besar melalui difusi terfasilitasi dan transpor aktif dependen-natrium; khusus Vitamin B12 memerlukan ikatan dengan Faktor Intrinsik (disintesis lambung) untuk endositosis diperantarai reseptor di ileum terminal',
      tujuan: 'Kapiler darah vili → Vena Porta Hepatika → Didistribusikan ke seluruh sel jaringan sebagai koenzim metabolik penting'
    },
    {
      nama: 'Air (H2O)',
      mekanisme: 'Osmosis pasif transeluler (melalui pori saluran protein akuaporin) dan paraseluler (melintasi tight junction antar-sel enterosit) yang mengikuti akumulasi gradien osmotik ion natrium dan nutrien',
      tujuan: 'Kapiler darah vili (90% diserap di usus halus, sisanya di kolon) → Menjaga hidrasi plasma darah dan volume cairan ekstraseluler tubuh'
    },
    {
      nama: 'Mineral & Elektrolit (Na+, K+, Cl-, Ca2+, Fe2+)',
      mekanisme: 'Transpor aktif (pompa kalsium diperantarai kalsitriol/vitamin D, kotransporter feroportin untuk besi berpasangan hepcidin) serta difusi elektrokimia untuk kalium dan klorida',
      tujuan: 'Kapiler darah vili → Hati dan sirkulasi darah (mempertahankan potensial membran saraf, kontraksi otot, pembentukan hemoglobin, dan kepadatan tulang)'
    }
  ],
  penyaluranHasil: `Penyaluran nutrien hasil absorpsi terbelah secara tegas menjadi dua rute vaskular utama:

1. Rute Pembuluh Darah (Sistem Vena Porta Hepatika):
Nutrien yang larut dalam air—meliputi monosakarida (glukosa, galaktosa, fruktosa), asam amino bebas, vitamin larut air (vitamin C dan ragam vitamin B kompleks), elektrolit, serta air—diserap langsung menembus endotelium kapiler darah fenestrata yang berjalin rapat di dalam stroma vili usus. Kapiler-kapiler ini bermuara ke venula submukosa, bergabung membentuk vena mesenterika superior, dan menyatu ke dalam VENA PORTA HEPATIKA. Rute ini membawa darah kaya nutrisi langsung masuk ke dalam organ HATI terlebih dahulu (First-Pass Metabolism). Di hati, glukosa berlebih segera diubah menjadi glikogen simpanan, asam amino diperiksa dan dimetabolisme, serta senyawa toksik dinetralkan sebelum darah dialirkan ke vena cava inferior menuju jantung untuk disebarkan ke seluruh tubuh.

2. Rute Pembuluh Limfa (Sistem Kil / Lakteal):
Nutrien yang larut dalam lemak—meliputi trigliserida (yang telah dirakit ulang ke dalam vesikel kilomikron berdiameter 75–1.000 nm), asam lemak rantai panjang, kolesterol ester, dan vitamin larut lemak (A, D, E, K)—memiliki ukuran molekul yang terlalu besar untuk dapat menembus pori-pori rapat kapiler darah biasa. Sebagai gantinya, kilomikron memasuki celah terbuka sel endotel pembuluh lakteal (kapiler limfatik berujung buntu di pusat setiap vili usus). Cairan limfa di dalam lakteal yang berwarna putih susu akibat tingginya konsentrasi lipid teremulsi dinamakan 'kilus' (chyle). Pembuluh kil mengalirkan kilus menuju pembuluh limfa mesenterika, berkumpul di sisterna kili (cisterna chyli) di rongga abdomen posterior, lalu naik melalui DUKTUS TORASIKUS (saluran limfatik utama tubuh) dan akhirnya bermuara ke dalam sirkulasi darah vena sistemik pada persimpangan VENA SUBKLAVIA SINISTRA dan vena jugularis interna di pangkal leher kiri. Melalui jalur ini, lemak diedarkan ke jaringan adiposa dan otot terlebih dahulu sebelum sisa kilomikron (remnant) diolah oleh hati.`,
  faktaPenting: [
    'Luas permukaan serap usus halus manusia mencapai 200 hingga 300 meter persegi, setara dengan ukuran satu lapangan tenis penuh, berkat lipatan plika, vili, dan mikrovili.',
    'Sekitar 9 liter cairan melintasi saluran pencernaan manusia setiap hari (2 liter dari makanan dan minuman + 7 liter dari sekresi cairan liur, getah lambung, empedu, pankreas, dan usus); lebih dari 98% dari seluruh cairan ini diserap kembali secara efisien.',
    'Usus halus menyerap sekitar 90% dari seluruh volume air yang masuk, sedangkan usus besar (kolon) menyerap sekitar 8-9% sisanya untuk memadatkan feses.',
    'Zat gizi larut air disaring terlebih dahulu oleh hati melalui vena porta hepatika untuk detoksifikasi dan penyimpanan glikogen sebelum mencapai jantung dan otak.',
    'Zat gizi lemak menghindari filter hati pertama kali dengan dialirkan langsung ke sistem getah bening (limfa) via duktus torasikus menuju vena subklavia sinistra di dekat jantung.'
  ]
}
