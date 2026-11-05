/**
 * Data Organ Sistem Pencernaan Manusia
 * Kurikulum Biologi SMA Kelas XI
 */

export interface OrganData {
  id: string
  nama: string
  namaLatin: string
  slug: string
  kategori: 'utama' | 'pendukung'
  deskripsi: string
  fungsiUtama: string[]
  prosesDigesti: string
  faktaMenarik: string
  lokasiTubuh: string
  ukuran: string
  warnaSVG: string
  ikonEmoji: string
}

export const ORGAN_DATA: OrganData[] = [
  {
    id: 'mulut',
    nama: 'Mulut (Rongga Mulut)',
    namaLatin: 'Cavum Oris',
    slug: 'mulut',
    kategori: 'utama',
    deskripsi: 'Gerbang utama sistem pencernaan tempat makanan pertama kali masuk dan mengalami pemecahan awal, baik secara fisik melalui kunyahan gigi maupun secara kimiawi oleh enzim dalam air liur.',
    fungsiUtama: [
      'Ingesti: memasukkan makanan ke dalam saluran pencernaan',
      'Pencernaan mekanik: mastikasi (pengunyahan) oleh gigi seri, taring, dan geraham',
      'Pencernaan kimiawi: hidrolisis amilum menjadi maltosa oleh enzim ptialin (amilase saliva)',
      'Lubrikasi & pembentukan bolus: pelumasan makanan oleh saliva agar mudah ditelan oleh lidah'
    ],
    prosesDigesti: `Pencernaan di dalam rongga mulut diawali dengan proses mastikasi atau pengunyahan. Gigi seri bertugas memotong makanan, gigi taring merobek serat, dan gigi geraham menggilas partikel makanan menjadi gumpalan-gumpalan berukuran jauh lebih kecil. Gerakan ini bertujuan memperluas area permukaan kontak makanan sehingga enzim dapat bekerja secara efisien.

Secara bersamaan, tiga pasang kelenjar saliva (glandula parotis, glandula submandibularis, dan glandula sublingualis) menyekresikan sekitar 1 hingga 1,5 liter air liur per hari. Air liur mengandung air, musin (lendir pelicin), antibodi lisozim pembunuh bakteri, serta enzim amilase saliva (ptialin) yang aktif pada kisaran pH netral (6,8-7,0). Enzim ptialin memutus ikatan alfa-1,4-glikosidik pada molekul amilum (polisakarida) terlarut dan mengubahnya menjadi maltosa dan maltotriosa (disakarida).

Lidah memainkan peran motorik penting dalam membolak-balikkan makanan, merasakan rasa dasar (manis, asin, asam, pahit, umami) melalui kuncup pengecap (papila), serta memadatkan makanan yang telah lumat bercampur saliva menjadi massa bulat kenyal yang disebut bolus. Ketika bolus sudah siap, lidah mendorongnya ke arah belakang rongga mulut menuju faring (tekak) untuk memulai proses menelan (deglutisi).`,
    faktaMenarik: 'Kelenjar ludah manusia memproduksi sekitar 1 hingga 1,5 liter air liur setiap hari—cukup untuk mengisi lebih dari dua cangkir air minum dalam waktu 24 jam.',
    lokasiTubuh: 'Kepala bagian bawah, berbatasan anterior dengan bibir dan posterior dengan orofaring',
    ukuran: 'Volume rongga berkisar antara 50 hingga 100 mL dalam kondisi istirahat',
    warnaSVG: '#10b981',
    ikonEmoji: '👄'
  },
  {
    id: 'kerongkongan',
    nama: 'Kerongkongan (Esofagus)',
    namaLatin: 'Esophagus',
    slug: 'kerongkongan',
    kategori: 'utama',
    deskripsi: 'Saluran silindris berotot yang menghubungkan rongga faring dengan lambung, berfungsi mengantarkan bolus makanan melalui gelombang kontraksi otot terkoordinasi.',
    fungsiUtama: [
      'Menghubungkan faring dengan rongga lambung melewati rongga dada (toraks)',
      'Menghasilkan gerak peristaltik untuk mendorong bolus makanan turun menuju lambung',
      'Mencegah aspirasi makanan ke trakea berkat koordinasi katup epiglotis',
      'Mencegah refluks asam lambung berkat sfingter esofagus bawah (lower esophageal sphincter/LES)'
    ],
    prosesDigesti: `Ketika bolus terdorong menuju faring, refleks menelan involunter segera diaktifkan oleh pusat deglutisi di medula oblongata. Katup tulang rawan lentur bernama epiglotis secara otomatis tertekuk menutup glotis (pintu masuk laring dan trakea) sehingga bolus terarah secara presisi ke dalam saluran esofagus dan tidak masuk ke saluran pernapasan.

Setelah bolus melewati sfingter esofagus atas (upper esophageal sphincter), otot-otot dinding esofagus melakukan gerak peristaltik. Dinding esofagus tersusun atas lapisan otot sirkular di bagian dalam dan otot longitudinal di bagian luar (sepertiga atas otot lurik volunter, sepertiga tengah kombinasi lurik dan polos, dan sepertiga bawah otot polos murni). Kontraksi otot sirkular di belakang bolus menekan makanan ke bawah, sementara relaksasi otot di depan bolus membuka jalan pergerakan.

Di dalam esofagus tidak terjadi pencernaan kimiawi baru karena dinding esofagus tidak menghasilkan enzim pencernaan, melainkan hanya kelenjar mukosa yang membasahi saluran agar jalannya bolus mulus. Bolus padat membutuhkan waktu sekitar 4 hingga 8 detik, sedangkan cairan hanya membutuhkan waktu sekitar 1 hingga 2 detik untuk melintasi kerongkongan sebelum sfingter esofagus bawah membuka dan memasukkannya ke lambung.`,
    faktaMenarik: 'Karena dorongan peristaltik sepenuhnya merupakan tenaga kontraksi otot aktif dan bukan akibat gaya gravitasi, manusia tetap dapat menelan makanan dan minum air bahkan dalam posisi tubuh terbalik atau di luar angkasa tanpa gravitasi.',
    lokasiTubuh: 'Membentang dari leher (setinggi vertebra C6), menuruni mediastinum posterior rongga toraks, menembus hiatus diafragma menuju rongga abdomen',
    ukuran: 'Panjang sekitar 25 cm dengan diameter rata-rata 2 cm',
    warnaSVG: '#0ea5e9',
    ikonEmoji: '🥖'
  },
  {
    id: 'lambung',
    nama: 'Lambung',
    namaLatin: 'Ventriculus / Gaster',
    slug: 'lambung',
    kategori: 'utama',
    deskripsi: 'Organ berongga berbentuk menyerupai huruf J dengan dinding otot tebal yang berfungsi sebagai penampung sementara makanan serta tempat berlangsungnya pencernaan mekanik dan kimiawi intensif.',
    fungsiUtama: [
      'Penyimpanan bolus makanan sementara (kapasitas 1,5 hingga 4 liter)',
      'Pencernaan mekanik hebat (churning/triturasi) melalui kontraksi 3 lapis otot dinding lambung',
      'Sekresi asam klorida (HCl) untuk mematikan patogen dan mengaktivasi enzim',
      'Pencernaan kimiawi protein oleh enzim pepsin',
      'Pembentukan kimus (chyme), yaitu bubur semi-cair yang siap masuk ke duodenum'
    ],
    prosesDigesti: `Lambung terbagi menjadi empat zona anatomis utama: kardia (muara masuk esofagus), fundus (kubah bagian atas penyimpan gas/makanan), korpus (badan utama tempat sekresi asam dan pencernaan), serta pilorus (bagian ujung bawah dengan sfingter pengatur pengeluaran). Dinding lambung memiliki lapisan otot yang sangat unik karena terdiri atas tiga arah lapisan: sirkular, longitudinal, dan oblik (miring). Kontraksi ritmis ketiga lapisan ini menghasilkan gerakan pengadukan kuat (churning) yang melumat bolus makanan menjadi massa homogen semi-cair kental bernama kimus (chyme).

Dinding mukosa lambung memiliki jutaan foveola gastrika yang mengarah ke kelenjar gastrik. Kelenjar ini memiliki beberapa jenis sel sekretori: sel parietal menghasilkan asam klorida (HCl berkonsentrasi tinggi yang membuat pH cairan lambung sangat asam, sekitar 1,5-2,0) dan faktor intrinsik Castle untuk absorpsi vitamin B12; sel utama (chief cells) menyekresikan enzim pepsinogen inaktif; serta sel leher mukosa (mucous neck cells) yang memproduksi lendir kaya bikarbonat.

Kondisi pH yang sangat asam berfungsi mendenaturasi struktur tersier protein makanan, membunuh mikroorganisme patogen yang tertelan, serta memicu pemotongan rantai peptida pada pepsinogen menjadi enzim pepsin yang aktif secara proteolitik. Pepsin kemudian memecah protein kompleks menjadi fragmen peptida yang lebih pendek (pepton dan proteosa). Dinding epitel lambung terlindung dari aksi destruktif asam dan pepsin oleh lapisan sawar mukosa tebal dan regenerasi sel yang cepat setiap 3-6 hari. Makanan berada di dalam lambung sekitar 2 hingga 4 jam sebelum sfingter pilorus membuka sedikit demi sedikit menyemprotkan chyme ke duodenum.`,
    faktaMenarik: 'Asam klorida (HCl) di dalam lambung memiliki tingkat keasaman (pH 1,5-2,0) yang cukup kuat untuk melarutkan sepotong logam seng tipis, namun lambung tidak mencerna dirinya sendiri berkat lapisan lendir mukosa basa dan pembaharuan sel epitel super cepat.',
    lokasiTubuh: 'Rongga perut bagian atas sebelah kiri (hipokondrium kiri dan epigastrium), tepat di bawah diafragma',
    ukuran: 'Panjang sekitar 25 cm, kapasitas sekitar 1,5 liter pada orang dewasa normal (dapat merenggang hingga 4 liter)',
    warnaSVG: '#f59e0b',
    ikonEmoji: '🫃'
  },
  {
    id: 'usus-halus',
    nama: 'Usus Halus',
    namaLatin: 'Intestinum Tenue',
    slug: 'usus-halus',
    kategori: 'utama',
    deskripsi: 'Saluran terpanjang dari traktus digestivus yang menjadi pusat utama penyelesaian pencernaan kimiawi makronutrien dan penyerapan sebagian besar sari makanan ke sirkulasi tubuh.',
    fungsiUtama: [
      'Penyelesaian pencernaan kimiawi karbohidrat, protein, dan lipid oleh enzim usus dan pankreas',
      'Penyerapan 90% air dan seluruh nutrisi utama (glukosa, asam amino, asam lemak, vitamin, mineral)',
      'Pencampuran kimus dengan getah empedu dan enzim melalui gerakan segmentasi',
      'Transportasi sisa pencernaan yang tidak terserap menuju usus besar melalui gerak peristaltik migratif'
    ],
    prosesDigesti: `Usus halus terbagi menjadi tiga segmen berurutan: duodenum (usus dua belas jari, ~25 cm), jejunum (usus kosong, ~2,5 m), dan ileum (usus penyerapan, ~3,5 m). Di duodenum, kimus asam dari lambung dinetralkan oleh ion bikarbonat (NaHCO3) yang disekresikan bersama getah pankreas melalui papila duodeni major. Di sini pula kimus bercampur dengan garam empedu dari hati/kantung empedu yang mengemulsikan lemak menjadi butiran tetesan mikro (misel) agar dapat dijangkau oleh lipase.

Enzim-enzim pencernaan dari pankreas (amilase pankreas, tripsin, kimotripsin, karboksipeptidase, lipase pankreas, dan nuklease) bersama dengan enzim brush border yang terikat pada mikrovili usus (maltase, sukrase, laktase, aminopeptidase, dipeptidase, dan nukleosidase) menyelesaikan hidrolisis nutrien. Karbohidrat dituntaskan menjadi monosakarida (glukosa, fruktosa, galaktosa), protein dipecah tuntas menjadi asam amino bebas dan peptida kecil, serta trigliserida dihidrolisis menjadi asam lemak bebas dan monogliserida.

Dinding bagian dalam jejunum dan ileum mengalami modifikasi struktural berlipat ganda untuk memaksimalkan absorpsi: plika sirkularis (lipatan sirkular Kerckring), vili intestinalis (tonjolan seperti jari setinggi 0,5-1 mm), dan mikrovili (juluran mikroskopis pada membran apikal enterosit). Monosakarida dan asam amino diserap secara transpor aktif dan difusi terfasilitasi langsung ke dalam kapiler darah vili menuju vena porta hepatika. Sementara itu, asam lemak rantai panjang dan monogliserida diserap ke dalam enterosit, dirakit kembali menjadi kilomikron, lalu disalurkan ke pembuluh kil (lacteal) dari sistem limfa.`,
    faktaMenarik: 'Kombinasi lipatan dinding, vili, dan mikrovili pada usus halus manusia memperluas area permukaan penyerapan hingga sekitar 250-300 meter persegi—kira-kira setara dengan luas satu lapangan tenis profesional.',
    lokasiTubuh: 'Menempati sebagian besar rongga abdomen bagian tengah dan bawah, terbentang dari sfingter pilorus lambung hingga katup ileosekal',
    ukuran: 'Panjang sekitar 6 hingga 7 meter dengan diameter 2,5 hingga 3 cm',
    warnaSVG: '#8b5cf6',
    ikonEmoji: '🧬'
  },
  {
    id: 'usus-besar',
    nama: 'Usus Besar (Kolon)',
    namaLatin: 'Intestinum Crassum',
    slug: 'usus-besar',
    kategori: 'utama',
    deskripsi: 'Saluran pencernaan berbentuk bingkai U terbalik yang mengelilingi usus halus, berfungsi mereabsorpsi cairan dan mineral serta memadatkan material feses dibantu oleh mikroflora simbiotik.',
    fungsiUtama: [
      'Reabsorpsi air (sekitar 1-1,5 liter per hari) dan elektrolit terlarut (natrium, klorida)',
      'Fermentasi serat makanan yang tidak tercerna oleh bakteri komensal usus (mikrobioma)',
      'Sintesis vitamin K dan vitamin B kompleks (seperti biotin dan B12) oleh flora usus',
      'Pembentukan, pelumasan, dan penyimpanan sementara massa feses sebelum diekskresikan'
    ],
    prosesDigesti: `Massa sisa pencernaan dari ileum melewati katup ileosekal (ileocecal valve) masuk ke sekum (kantong buntu awal usus besar) yang memiliki tonjolan kecil bernama apendiks (umbai cacing). Usus besar kemudian berlanjut melalui empat bagian kolon: kolon asenden (naik di sisi kanan rongga perut), kolon transversum (melintang di bawah lambung), kolon desenden (menurun di sisi kiri rongga perut), dan kolon sigmoid (berbentuk S menuju rektum).

Usus besar tidak memiliki vili dan tidak memproduksi enzim pencernaan sendiri, melainkan kaya akan sel goblet penyekresi mukus tebal yang melumasi dinding lumen agar feses yang mengeras tidak melukai mukosa. Fungsi utamanya adalah menyerap kembali sisa air dan elektrolit dari sekitar 1,5-2 liter bubur residu yang masuk per hari, menyisakan sekitar 150-200 gram feses padat.

Di dalam lumen kolon hidup triliunan bakteri anaerobik simbiotik (mikrobioma usus, dominan oleh Bacteroides, Escherichia coli, dan Bifidobacterium). Bakteri-bakteri ini memfermentasi sisa karbohidrat yang tidak tercerna (seperti selulosa dan serat pangan) menghasilkan asam lemak rantai pendek (SCFA) yang menutrisi sel epitel kolon, serta gas (metana, hidrogen sulfida) yang menimbulkan flatus. Bakteri usus juga mensintesis vitamin vital seperti vitamin K yang esensial untuk pembekuan darah, serta beberapa vitamin B. Feses yang terbentuk kemudian didorong oleh kontraksi massa berkala (mass movement) menuju ampula rektum.`,
    faktaMenarik: 'Sekitar 30-50% dari berat kering feses manusia bukanlah sisa makanan yang kita makan, melainkan biomassa miliaran bakteri usus hidup dan mati yang gugur secara alami dari saluran pencernaan.',
    lokasiTubuh: 'Membingkai rongga perut di kuadran kanan bawah, kuadran atas, hingga kuadran kiri bawah mengelilingi usus halus',
    ukuran: 'Panjang sekitar 1,5 meter dengan diameter sekitar 6,5 cm (jauh lebih lebar daripada usus halus)',
    warnaSVG: '#ec4899',
    ikonEmoji: '🪵'
  },
  {
    id: 'anus',
    nama: 'Anus dan Rektum',
    namaLatin: 'Canalis Analis et Rectum',
    slug: 'anus',
    kategori: 'utama',
    deskripsi: 'Bagian terminal dari sistem saluran pencernaan yang tersusun atas ruang sensorik penyimpanan dan kanal pembuka yang diatur oleh dua cincin otot sfingter untuk proses defekasi.',
    fungsiUtama: [
      'Penyimpanan sementara feses di dalam ampula rektum dengan deteksi peregangan dinding',
      'Pengaturan kontinensia (menahan BAB) dan waktu defekasi yang tepat',
      'Pengeluaran feses (defekasi) dari dalam tubuh melalui koordinasi relaksasi sfingter dan kontraksi abdomen'
    ],
    prosesDigesti: `Sebelum mencapai anus, massa feses ditampung di dalam rektum (segmen lurus sepanjang 12-15 cm). Ketika ampula rektum terisi oleh feses akibat dorongan gerakan massa dari kolon sigmoid, dinding rektum akan meregang. Peregangan mekanik ini merangsang mekanoreseptor sensorik dan mencetuskan refleks defekasi parasimpatis lokal ke medula spinalis segmen sakral.

Sinyal saraf parasimpatis menyebabkan relaksasi pada sfingter anal internal (sfingter ani internus). Sfingter internal ini tersusun atas serat otot polos involunter yang bekerja di luar kendali kesadaran, sehingga sensasi 'kebelet' atau dorongan untuk buang air besar mulai disadari oleh korteks serebri otak.

Tahap akhir pengeluaran dikontrol secara sadar oleh sfingter anal eksternal (sfingter ani eksternus), yang tersusun atas otot lurik volunter di bawah kendali saraf somatik pudendus. Jika kondisi lingkungan memungkinkan, individu merelaksasikan sfingter eksternal secara sadar, didukung peningkatan tekanan intra-abdomen melalui manuver Valsalva (mengejan dengan menutup glotis dan mengencangkan otot diafragma serta dinding perut), sehingga kanal anus terbuka dan feses dikeluarkan secara lancar. Sebaliknya jika belum memungkinkan, sfingter eksternal berkontraksi menahan feses sampai gelombang refleks berikutnya tiba.`,
    faktaMenarik: 'Kanal anus memiliki epitel sensorik yang sangat sensitif dengan pasokan saraf yang mampu membedakan dengan presisi tinggi apakah isi yang berada di ampula rektum berupa gas murni (flatus), cairan, atau feses padat.',
    lokasiTubuh: 'Terletak di dasar pelvis (perineum), di antara kedua lipatan bokong, merupakan muara paling distal traktus digestivus',
    ukuran: 'Panjang kanal anus sekitar 3 hingga 4 cm; rektum memiliki panjang sekitar 12 hingga 15 cm',
    warnaSVG: '#94a3b8',
    ikonEmoji: '🚪'
  },
  {
    id: 'hati',
    nama: 'Hati (Liver)',
    namaLatin: 'Hepar',
    slug: 'hati',
    kategori: 'pendukung',
    deskripsi: 'Kelenjar terbesar dalam tubuh manusia yang berfungsi sebagai organ metabolik serbaguna, pabrik pemrosesan zat gizi, organ detoksifikasi utama, serta penghasil getah empedu untuk pencernaan lipid.',
    fungsiUtama: [
      'Memproduksi dan menyekresikan empedu (bile) sekitar 600-1000 mL per hari untuk emulsifikasi lemak',
      'Metabolisme karbohidrat: glikogenesis (pembentukan glikogen), glikogenolisis, dan glukoneogenesis',
      'Detoksifikasi zat beracun, obat-obatan, dan pemecahan amonia berbahaya menjadi urea lewat siklus urea',
      'Sintesis protein plasma darah esensial (albumin, globulin alfa & beta, fibrinogen, dan protrombin)',
      'Penyimpanan zat besi (feritin), vitamin larut lemak (A, D, E, K), serta vitamin B12'
    ],
    prosesDigesti: `Dalam sistem pencernaan, peran sentral hati diperankan melalui sekresi getah empedu (bilis) oleh sel-sel hepatosit. Getah empedu merupakan cairan berwarna kuning-kehijauan beralkalin (pH 7,6-8,6) yang mengandung air, garam-garam empedu (natrium glikokolat dan natrium taurokolat), pigmen empedu (bilirubin dan biliverdin hasil perombakan hemoglobin eritrosit tua oleh sel Kupffer), kolesterol, lesitin, dan elektrolit.

Garam empedu memiliki sifat amfifilik (memiliki gugus hidrofilik dan hidrofobik). Ketika kimus kaya lemak memasuki duodenum, garam empedu membungkus gumpalan globula trigliserida besar dan meremukkannya menjadi tetesan mikro (proses emulsifikasi mekanis). Emulsifikasi ini meningkatkan luas permukaan lipid beribu kali lipat, memungkinkan enzim lipase pankreas yang larut air untuk menyerang dan menghidrolisis ikatan ester lipid secara cepat.

Selain memproduksi empedu, hati menerima langsung seluruh darah vena pembawa sari makanan dari dinding lambung dan usus halus melalui vena porta hepatika. Di dalam sinusoid hati, hepatosit menyaring nutrisi: kelebihan glukosa diubah menjadi glikogen simpanan di bawah pengaruh hormon insulin, racun atau alkohol dinetralkan melalui sistem enzim sitokrom P450, serta asam amino berlebih dideaminasi menjadi urea untuk diekskresikan melalui ginjal.`,
    faktaMenarik: 'Hati adalah satu-satunya organ dalam tubuh manusia yang memiliki kemampuan regenerasi luar biasa; jika hingga 75% jaringan hati diangkat melalui operasi, jaringan tersebut dapat tumbuh kembali ke ukuran aslinya dalam beberapa bulan.',
    lokasiTubuh: 'Rongga perut bagian atas sebelah kanan (hipokondrium kanan dan sebagian epigastrium), tepat di bawah kubah diafragma',
    ukuran: 'Berat sekitar 1,4 hingga 1,8 kg pada orang dewasa dengan lebar melintang sekitar 20-22 cm',
    warnaSVG: '#dc2626',
    ikonEmoji: '🫀'
  },
  {
    id: 'pankreas',
    nama: 'Pankreas',
    namaLatin: 'Pancreas',
    slug: 'pankreas',
    kategori: 'pendukung',
    deskripsi: 'Organ kelenjar ganda (eksokrin dan endokrin) retroperitoneal memanjang yang menghasilkan getah pencernaan kaya enzim terkuat tubuh dan hormon pengatur homeostasis gula darah.',
    fungsiUtama: [
      'Fungsi eksokrin (98-99% massa): sekresi getah pankreas berisi enzim pencernaan pemecah seluruh makronutrien',
      'Sekresi natrium bikarbonat (NaHCO3) dalam jumlah besar untuk menetralkan kimus asam dari lambung',
      'Fungsi endokrin (1-2% massa / pulau Langerhans): sekresi hormon insulin oleh sel beta dan glukagon oleh sel alfa',
      'Mencegah autodigesti kelenjar dengan memproduksi proenzim (zimogen inaktif) dan inhibitor tripsin'
    ],
    prosesDigesti: `Pankreas terbagi atas empat bagian: caput (kepala yang bersandar di lekukan duodenum), collum (leher), corpus (badan), dan cauda (ekor yang menyentuh limpa). Sel-sel asinus pankreas menyusun unit sekretori eksokrin yang menyekresikan sekitar 1,2 hingga 1,5 liter cairan pankreas jernih tidak berwarna setiap hari ke dalam duktus pankreatikus mayor (duktus Wirsung), yang kemudian bermuara ke duodenum via ampula hepatopankreatika (ampula Vater).

Cairan pankreas mengandung ion bikarbonat (HCO3-) berkonsentrasi tinggi yang diekskresikan oleh sel epitel duktus. Bikarbonat ini bertugas krusial menaikkan pH kimus asam yang baru keluar dari lambung dari pH ~2 menjadi pH basa ramah enzim (~7,5-8,2). Keasaman yang netral melindungi mukosa duodenum dari erosi asam serta menciptakan kondisi lingkungan kerja yang ideal bagi enzim usus dan pankreas.

Getah pankreas memuat enzim pencerna semua golongan makanan utama: (1) Amilase pankreas memecah sisa amilum menjadi maltosa; (2) Lipase pankreas (steapsin) dibantu kolipase menghidrolisis trigliserida teremulsi menjadi asam lemak bebas dan 2-monogliserida; (3) Protease yang disekresikan dalam bentuk zimogen inaktif guna menghindari autodigesti (tripsinogen, kimotripsinogen, prokarboksipeptidase). Di lumen duodenum, tripsinogen diaktivasi oleh enzim enteropeptidase (enterokinase) dinding usus menjadi tripsin aktif. Tripsin aktif kemudian mengaktivasi zimogen lainnya untuk mencerna polipeptida menjadi oligopeptida dan asam amino.`,
    faktaMenarik: 'Pankreas menghasilkan proenzim inaktif (seperti tripsinogen) bersama dengan senyawa khusus bernama protease inhibitor; jika enzim aktif sebelum waktunya di dalam pankreas, organ ini akan mencerna dirinya sendiri, menyebabkan kondisi fatal yang disebut pankreatitis akut.',
    lokasiTubuh: 'Terletak di belakang lambung (retroperitoneal), terbentang horizontal dari lengkungan duodenum hingga limpa di kuadran kiri atas',
    ukuran: 'Panjang sekitar 12 hingga 15 cm, lebar 4 cm, dengan berat sekitar 70 hingga 100 gram',
    warnaSVG: '#eab308',
    ikonEmoji: '🥞'
  },
  {
    id: 'kantung-empedu',
    nama: 'Kantung Empedu',
    namaLatin: 'Vesica Fellea / Gallbladder',
    slug: 'kantung-empedu',
    kategori: 'pendukung',
    deskripsi: 'Organ berongga berbentuk menyerupai buah pir kecil yang melekat di bawah lobus kanan hati, berfungsi menampung, memekatkan, dan menyemprotkan getah empedu ke usus halus.',
    fungsiUtama: [
      'Menyimpan cairan empedu yang diproduksi terus-menerus oleh hepatosit hati',
      'Memekatkan empedu hingga 5-10 kali lipat dengan menyerap kembali air dan elektrolit',
      'Merespons hormon kolesistokinin (CCK) untuk mengontraksikan dinding ototnya dan menyemprotkan empedu',
      'Mengalirkan empedu melalui duktus sistikus menuju duktus koledokus (saluran empedu utama) ke duodenum'
    ],
    prosesDigesti: `Hati memproduksi cairan empedu secara berkesinambungan setiap saat, namun proses pencernaan makanan di usus halus hanya terjadi secara berkala setelah kita makan. Di antara waktu makan (saat lambung dan usus kosong), sfingter Oddi pada muara ampula hepatopankreatika tetap dalam keadaan tertutup rapat. Akibatnya, getah empedu yang terus mengalir dari duktus hepatikus terbendung dan teralihkan naik melalui duktus sistikus ke dalam kantung empedu.

Di dalam kantung empedu, mukosa dindingnya aktif menyerap air, natrium, dan klorida dari cairan empedu. Melalui proses dehidrasi selektif ini, konsentrasi konstituen empedu utama—terutama garam empedu, lesitin, dan kolesterol—menjadi pekat hingga lima sampai sepuluh kali lipat dari kondisi awalnya di hati. Hal ini membuat kantung kecil berkapasitas 30-50 mL sanggup menyimpan persediaan empedu harian dalam jumlah yang sangat efektif.

Ketika makanan yang mengandung lemak dan protein masuk dari lambung menuju duodenum, sel-sel enteroendokrin di mukosa duodenum melepaskan hormon kolesistokinin (CCK) ke peredaran darah. Hormon CCK menstimulasi dua aksi selaras: (1) memicu kontraksi ritmis dinding otot polos kantung empedu, dan (2) memicu relaksasi sfingter Oddi. Akibatnya, getah empedu pekat disemprotkan deras masuk ke lumen duodenum untuk langsung melingkupi butiran lemak, membentuk emulsi stabil, dan mempersiapkan lemak bagi aksi enzimatis lipase.`,
    faktaMenarik: 'Manusia tetap dapat hidup sehat dan normal tanpa kantung empedu (setelah operasi kolesistektomi pengangkatan kantung empedu karena batu empedu); getah empedu dari hati akan langsung menetes secara konstan ke usus halus, meski pasien disarankan membatasi konsumsi makanan berlemak dalam porsi besar sekaligus.',
    lokasiTubuh: 'Fosa vesika felea pada permukaan inferior lobus kanan hati, di kuadran kanan atas abdomen',
    ukuran: 'Panjang sekitar 7 hingga 10 cm dengan lebar transversal 3 cm, berkapasitas 30 hingga 50 mL',
    warnaSVG: '#16a34a',
    ikonEmoji: '🥑'
  }
]
