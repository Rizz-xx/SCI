import { QuizQuestion, QuizOption, QuizCategory } from '../types/quiz'

export type { QuizQuestion, QuizOption, QuizCategory }

/**
 * Bank Soal Kuis Biologi SMA Kelas XI - Sistem Pencernaan Manusia
 * Total 25 Soal: 5 Soal per Tujuan Pembelajaran (Objective 1 - 5)
 * Fallback data untuk frontend jika backend tidak tersedia
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // =========================================================================
  // OBJECTIVE 1: ORGAN & FUNGSINYA (q1 - q5)
  // =========================================================================
  {
    id: 'q1',
    questionText: 'Organ manakah dalam sistem pencernaan manusia yang memiliki kelenjar lambung untuk mensekresikan asam klorida (HCl) serta pepsinogen guna memulai pencernaan protein?',
    category: 'organ',
    objective: 1,
    options: [
      { id: 'a', text: 'Rongga Mulut (Cavum oris)', isCorrect: false },
      { id: 'b', text: 'Pankreas', isCorrect: false },
      { id: 'c', text: 'Lambung (Ventrikulus)', isCorrect: true },
      { id: 'd', text: 'Hati (Hepar)', isCorrect: false },
    ],
    explanation: 'Lambung (ventrikulus) memiliki kelenjar pada dinding mukosanya yang mensekresikan getah lambung. Getah ini mengandung asam klorida (HCl) yang mematikan kuman patogen dan mengaktifkan pepsinogen menjadi enzim pepsin aktif untuk mencerna protein.',
  },
  {
    id: 'q2',
    questionText: 'Hati (hepar) merupakan kelenjar pencernaan terbesar dalam tubuh manusia. Peran utama hati yang secara langsung mendukung efisiensi proses pencernaan makanan adalah...',
    category: 'organ',
    objective: 1,
    options: [
      { id: 'a', text: 'Menghasilkan cairan empedu yang berfungsi mengemulsikan gumpalan lemak', isCorrect: true },
      { id: 'b', text: 'Menghasilkan enzim amilase untuk memecah amilum menjadi maltosa', isCorrect: false },
      { id: 'c', text: 'Menghasilkan hormon insulin untuk mencerna glukosa dalam lambung', isCorrect: false },
      { id: 'd', text: 'Mensekresikan asam lambung untuk melarutkan serat makanan', isCorrect: false },
    ],
    explanation: 'Hati memproduksi cairan empedu (bilus) yang disimpan di kantung empedu. Garam-garam empedu bekerja mengemulsi lemak dari gumpalan besar menjadi tetesan halus (misel), sehingga memperluas bidang kontak bagi enzim lipase pankreas.',
  },
  {
    id: 'q3',
    questionText: 'Usus halus (intestinum tenue) pada manusia dewasa memiliki panjang rata-rata mencapai 6 hingga 7 meter. Alasan biologis utama mengapa organ ini berukuran sangat panjang dan berkelok-kelok adalah...',
    category: 'organ',
    objective: 1,
    options: [
      { id: 'a', text: 'Untuk menyimpan cadangan makanan padat selama 24 sampai 48 jam sebelum dicerna', isCorrect: false },
      { id: 'b', text: 'Sebagai saluran pembuangan cepat feses menuju rektum tanpa hambatan peristaltik', isCorrect: false },
      { id: 'c', text: 'Untuk memproduksi sel-sel darah merah dan leukosit dalam jumlah masif', isCorrect: false },
      { id: 'd', text: 'Menyediakan waktu transit yang memadai dan luas permukaan maksimal untuk pencernaan kimiawi serta absorpsi sari makanan', isCorrect: true },
    ],
    explanation: 'Panjang usus halus (sekitar 6–7 meter) yang berlipat-lipat memaksimalkan waktu transit makanan serta memperluas bidang kontak agar reaksi enzimatis tuntas dan seluruh sari-sari makanan dapat diserap optimal ke sirkulasi tubuh.',
  },
  {
    id: 'q4',
    questionText: 'Organ aksesori pencernaan berbentuk kantung kecil yang bertindak sebagai tempat penampungan sementara dan pemekatan cairan empedu sebelum disalurkan ke duodenum adalah...',
    category: 'organ',
    objective: 1,
    options: [
      { id: 'a', text: 'Limpa (Lien)', isCorrect: false },
      { id: 'b', text: 'Apendiks (Umbai cacing)', isCorrect: false },
      { id: 'c', text: 'Kantung empedu (Vesica fellea)', isCorrect: true },
      { id: 'd', text: 'Kelenjar ludah parotis', isCorrect: false },
    ],
    explanation: 'Kantung empedu (vesica fellea) berfungsi menampung dan memekatkan cairan empedu yang disintesis hati. Saat kimus berlemak memasuki duodenum, hormon kolesistokinin (CCK) memicu kantung empedu berkontraksi menyalurkan empedu melalui duktus koledokus.',
  },
  {
    id: 'q5',
    questionText: 'Ketika seseorang menelan makanan, bolus makanan didorong menuruni esofagus (kerongkongan) menuju lambung terutama melalui mekanisme fisiologis...',
    category: 'organ',
    objective: 1,
    options: [
      { id: 'a', text: 'Gaya gravitasi bumi semata saat tubuh berada dalam posisi tegak', isCorrect: false },
      { id: 'b', text: 'Gerak peristaltik hasil kontraksi ritmis otot dinding esofagus', isCorrect: true },
      { id: 'c', text: 'Tekanan udara positif dari rongga hidung dan faring', isCorrect: false },
      { id: 'd', text: 'Hisapan pasif dari sfingter kardia lambung yang berelaksasi', isCorrect: false },
    ],
    explanation: 'Esofagus menyalurkan bolus ke lambung menggunakan gerak peristaltik, yaitu gelombang kontraksi dan relaksasi ritmis otot sirkuler dan longitudinal dinding kerongkongan, sehingga makanan tetap dapat bergerak lancar bahkan saat posisi tidur.',
  },

  // =========================================================================
  // OBJECTIVE 2: PROSES PENCERNAAN MEKANIK & KIMIAWI (q6 - q10)
  // =========================================================================
  {
    id: 'q6',
    questionText: 'Pencernaan makanan pada manusia dibedakan menjadi pencernaan mekanik dan pencernaan kimiawi. Perbedaan mendasar yang paling tepat antara kedua proses tersebut adalah...',
    category: 'proses',
    objective: 2,
    options: [
      { id: 'a', text: 'Pencernaan mekanik terjadi secara intraseluler, sedangkan pencernaan kimiawi terjadi secara ekstraseluler', isCorrect: false },
      { id: 'b', text: 'Pencernaan mekanik memecah makanan secara fisik menjadi partikel lebih kecil, sedangkan kimiawi memutus ikatan kimia molekul kompleks menggunakan enzim', isCorrect: true },
      { id: 'c', text: 'Pencernaan mekanik hanya berlangsung di usus besar, sedangkan pencernaan kimiawi hanya berlangsung di mulut', isCorrect: false },
      { id: 'd', text: 'Pencernaan mekanik menghasilkan molekul ATP langsung, sedangkan pencernaan kimiawi membutuhkan panas tubuh yang tinggi', isCorrect: false },
    ],
    explanation: 'Pencernaan mekanik (mengunyah, mengaduk) hanya mereduksi ukuran fisik partikel makanan untuk memperluas area permukaan tanpa mengubah struktur kimia. Pencernaan kimiawi melibatkan enzim hidrolase yang memutus ikatan kovalen makromolekul menjadi senyawa sederhana.',
  },
  {
    id: 'q7',
    questionText: 'Di sepanjang saluran gastrointestinal terjadi gerakan peristaltik yang berkesinambungan. Peranan fisiologis utama dari gerak peristaltik ini adalah...',
    category: 'proses',
    objective: 2,
    options: [
      { id: 'a', text: 'Mendorong massa makanan bergerak maju sepanjang saluran cerna sekaligus mencampurnya dengan getah pencernaan', isCorrect: true },
      { id: 'b', text: 'Menghambat laju absorpsi glukosa dan air agar lumen usus tidak mengalami dehidrasi', isCorrect: false },
      { id: 'c', text: 'Menghancurkan bakteri patogen melalui gesekan mekanik bertekanan tinggi', isCorrect: false },
      { id: 'd', text: 'Mengembalikan kimus yang belum tercerna sempurna dari duodenum kembali ke lambung', isCorrect: false },
    ],
    explanation: 'Gerak peristaltik berfungsi ganda: sebagai gerak propulsi (mendorong maju makanan ke segmen berikutnya) dan gerak segmentasi/mixing (mencampur bolus/kimus dengan enzim dan getah pencernaan agar hidrolisis berlangsung optimal).',
  },
  {
    id: 'q8',
    questionText: 'Setelah makanan dicerna secara mekanik dan kimiawi selama 2 hingga 4 jam di dalam lambung, bolus padat diubah menjadi massa kental setengah cair yang bersifat asam sebelum disalurkan ke duodenum. Massa ini disebut...',
    category: 'proses',
    objective: 2,
    options: [
      { id: 'a', text: 'Feses', isCorrect: false },
      { id: 'b', text: 'Kilus (Chyle)', isCorrect: false },
      { id: 'c', text: 'Kimus (Chyme)', isCorrect: true },
      { id: 'd', text: 'Bolus', isCorrect: false },
    ],
    explanation: 'Kimus (chyme) adalah suspensi setengah cair yang sangat asam hasil pencernaan lambung, terbentuk dari pengadukan mekanik otot lambung bercampur dengan asam klorida (HCl) dan pepsin sebelum dilepaskan bertahap ke duodenum.',
  },
  {
    id: 'q9',
    questionText: 'Seorang siswa mengunyah sebutir kacang secara perlahan menggunakan gigi seri, taring, dan geraham serta dibantu lidah. Proses pengunyahan (mastikasi) tersebut tergolong ke dalam...',
    category: 'proses',
    objective: 2,
    options: [
      { id: 'a', text: 'Pencernaan mekanik', isCorrect: true },
      { id: 'b', text: 'Pencernaan kimiawi murni', isCorrect: false },
      { id: 'c', text: 'Penyerapan nutrien (absorpsi)', isCorrect: false },
      { id: 'd', text: 'Egesti (eliminasi zat sisa)', isCorrect: false },
    ],
    explanation: 'Aktivitas pengunyahan (mastikasi) oleh gigi dan pergerakan lidah merupakan pencernaan mekanik murni, karena meremukkan makanan padat menjadi partikel berukuran mikro tanpa mengubah susunan molekul kimiawi zat makanan tersebut.',
  },
  {
    id: 'q10',
    questionText: 'Pencernaan kimiawi pertama kali dimulai pada organ pencernaan mana dan melibatkan substrat makromolekul apa?',
    category: 'proses',
    objective: 2,
    options: [
      { id: 'a', text: 'Lambung, melalui pencernaan protein oleh enzim pepsin', isCorrect: false },
      { id: 'b', text: 'Usus dua belas jari, melalui hidrolisis trigliserida oleh lipase pankreas', isCorrect: false },
      { id: 'c', text: 'Esofagus, melalui fermentasi serat selulosa oleh bakteri komensal', isCorrect: false },
      { id: 'd', text: 'Rongga mulut, melalui pemecahan amilum oleh enzim ptialin (amilase saliva)', isCorrect: true },
    ],
    explanation: 'Pencernaan kimiawi pertama kali terjadi di rongga mulut saat bolus bercampur dengan saliva yang mengandung enzim ptialin (amilase saliva), yang mengkatalisis pemecahan amilum (pati) menjadi maltosa pada pH berkisar 6,8-7,0.',
  },

  // =========================================================================
  // OBJECTIVE 3: ENZIM PENCERNAAN & FUNGSINYA (q11 - q15)
  // =========================================================================
  {
    id: 'q11',
    questionText: 'Enzim ptialin (amilase saliva) yang dihasilkan oleh kelenjar ludah mengkatalisis reaksi pemecahan substrat...',
    category: 'enzim',
    objective: 3,
    options: [
      { id: 'a', text: 'Amilum (polisakarida) menjadi maltosa (disakarida)', isCorrect: true },
      { id: 'b', text: 'Protein hewani menjadi asam-asam amino bebas', isCorrect: false },
      { id: 'c', text: 'Trigliserida (lemak) menjadi asam lemak dan gliserol', isCorrect: false },
      { id: 'd', text: 'Maltosa menjadi molekul-molekul glukosa tunggal', isCorrect: false },
    ],
    explanation: 'Enzim amilase saliva (ptialin) memutus ikatan alfa-1,4-glikosidik pada molekul amilum (polisakarida) yang terlarut, menghasilkan disakarida berupa maltosa, isomaltosa, serta dekstrin rantai pendek.',
  },
  {
    id: 'q12',
    questionText: 'Enzim pepsin yang disekresikan oleh sel peptik/chief pada dinding lambung menunjukkan aktivitas katalitik tertinggi (pH optimum) pada rentang keasaman...',
    category: 'enzim',
    objective: 3,
    options: [
      { id: 'a', text: 'pH 7,0 - 8,0 (lingkungan netral mendekati basa)', isCorrect: false },
      { id: 'b', text: 'pH 8,5 - 9,5 (lingkungan sangat basa)', isCorrect: false },
      { id: 'c', text: 'pH 1,5 - 2,0 (lingkungan sangat asam)', isCorrect: true },
      { id: 'd', text: 'pH 5,0 - 6,0 (lingkungan asam lemah)', isCorrect: false },
    ],
    explanation: 'Pepsin merupakan protease asam yang bekerja optimal pada pH sangat asam (1,5 - 2,0). Kondisi ini difasilitasi oleh sekresi asam klorida (HCl). Pada pH di atas 5,0, pepsin terdenaturasi dan kehilangan daya katalitiknya.',
  },
  {
    id: 'q13',
    questionText: 'Pankreas memproduksi getah pencernaan yang dialirkan ke duodenum. Enzim protease pankreas yang bertugas memecah molekul protein dan pepton menjadi peptida yang lebih pendek adalah...',
    category: 'enzim',
    objective: 3,
    options: [
      { id: 'a', text: 'Ptialin', isCorrect: false },
      { id: 'b', text: 'Tripsin', isCorrect: true },
      { id: 'c', text: 'Lipase gastrik', isCorrect: false },
      { id: 'd', text: 'Laktase', isCorrect: false },
    ],
    explanation: 'Tripsin disekresikan oleh asinus pankreas dalam bentuk proenzim inaktif (tripsinogen). Di duodenum, enterokinase mengaktifkannya menjadi tripsin aktif yang memutus ikatan peptida rantai protein dan pepton menjadi oligopeptida.',
  },
  {
    id: 'q14',
    questionText: 'Enzim lipase pankreas (steapsin) memegang peranan krusial dalam pencernaan lipid. Reaksi hidrolisis yang dikatalisis oleh lipase menghasilkan produk akhir berupa...',
    category: 'enzim',
    objective: 3,
    options: [
      { id: 'a', text: 'Asam nukleat dan gugus fosfat anorganik', isCorrect: false },
      { id: 'b', text: 'Monosakarida glukosa dan galaktosa', isCorrect: false },
      { id: 'c', text: 'Oligopeptida dan asam amino esensial', isCorrect: false },
      { id: 'd', text: 'Asam lemak bebas dan gliserol (monogliserida)', isCorrect: true },
    ],
    explanation: 'Lipase menghidrolisis ikatan ester pada trigliserida (yang sebelumnya telah diemulsikan oleh garam empedu) menjadi dua molekul asam lemak bebas dan satu molekul monogliserida atau gliserol, yang dapat diserap melintasi membran sel enterosit.',
  },
  {
    id: 'q15',
    questionText: 'Pada permukaan membran mikrovili usus halus (brush border), proses hidrolisis pepton dan oligopeptida dituntaskan menjadi asam amino bebas yang siap diserap tubuh oleh kelompok enzim...',
    category: 'enzim',
    objective: 3,
    options: [
      { id: 'a', text: 'Amilase dan ptialin', isCorrect: false },
      { id: 'b', text: 'Erepsin (peptidase)', isCorrect: true },
      { id: 'c', text: 'Renin dan pepsinogen', isCorrect: false },
      { id: 'd', text: 'Lipase dan enterokinase', isCorrect: false },
    ],
    explanation: 'Erepsin adalah sebutan untuk kelompok enzim peptidase (seperti aminopeptidase dan dipeptidase) yang berada pada mikrovili usus halus, berfungsi memecah dipeptida dan oligopeptida menjadi monomer asam amino bebas yang siap diserap ke kapiler darah.',
  },

  // =========================================================================
  // OBJECTIVE 4: LAB UJI ZAT MAKANAN (q16 - q20)
  // =========================================================================
  {
    id: 'q16',
    questionText: 'Dalam kegiatan praktikum biologi uji zat makanan, reagen kimia yang digunakan khusus untuk mengidentifikasi adanya kandungan polisakarida amilum (pati) adalah...',
    category: 'lab',
    objective: 4,
    options: [
      { id: 'a', text: 'Larutan Lugol (Kalium Iodida)', isCorrect: true },
      { id: 'b', text: 'Reagen Biuret (campuran NaOH dan CuSO4)', isCorrect: false },
      { id: 'c', text: 'Reagen Benedict', isCorrect: false },
      { id: 'd', text: 'Kertas buram transparan', isCorrect: false },
    ],
    explanation: 'Larutan Lugol (iodin dalam kalium iodida) merupakan reagen spesifik uji amilum. Molekul iodin terperangkap dalam struktur heliks amilosa menghasilkan senyawa kompleks dengan warna yang khas.',
  },
  {
    id: 'q17',
    questionText: 'Hasil uji laboratorium terhadap sampel ekstrak makanan ditetesi larutan Lugol menunjukkan reaksi positif adanya amilum jika larutan berubah warna menjadi...',
    category: 'lab',
    objective: 4,
    options: [
      { id: 'a', text: 'Merah bata pekat dengan endapan kristal', isCorrect: false },
      { id: 'b', text: 'Ungu lembayung (violet) transparan', isCorrect: false },
      { id: 'c', text: 'Biru kehitaman atau biru tua pekat', isCorrect: true },
      { id: 'd', text: 'Kuning jernih cerah', isCorrect: false },
    ],
    explanation: 'Reaksi positif antara iodin (Lugol) dan amilum ditandai dengan terbentuknya warna biru tua atau biru kehitaman. Intensitas warna biru kehitaman sebanding dengan konsentrasi amilum yang terdapat dalam bahan makanan.',
  },
  {
    id: 'q18',
    questionText: 'Reagen Benedict ditambahkan ke dalam larutan bahan makanan kemudian dipanaskan dalam penangas air mendidih. Uji laboratorium ini dirancang untuk mendeteksi keberadaan...',
    category: 'lab',
    objective: 4,
    options: [
      { id: 'a', text: 'Lemak jenuh dan kolesterol', isCorrect: false },
      { id: 'b', text: 'Gula pereduksi (seperti glukosa, fruktosa, dan maltosa)', isCorrect: true },
      { id: 'c', text: 'Polipeptida dan protein albumin', isCorrect: false },
      { id: 'd', text: 'Vitamin C (asam askorbat)', isCorrect: false },
    ],
    explanation: 'Uji Benedict mendeteksi gugus aldehida atau keton bebas pada gula pereduksi. Saat dipanaskan, gula pereduksi mereduksi ion Cu2+ (berwarna biru) menjadi endapan tembaga(I) oksida (Cu2O) yang berwarna merah bata.',
  },
  {
    id: 'q19',
    questionText: 'Pada pengujian sampel makanan cair, penambahan reagen Biuret (larutan NaOH 10% dan tetesan CuSO4 1%) menghasilkan perubahan warna menjadi ungu (violet). Fenomena biokimia ini mengindikasikan adanya...',
    category: 'lab',
    objective: 4,
    options: [
      { id: 'a', text: 'Trigliserida yang teremulsi sempurna', isCorrect: false },
      { id: 'b', text: 'Monosakarida heksosa berkonsentrasi tinggi', isCorrect: false },
      { id: 'c', text: 'Asam sitrat yang menurunkan pH larutan', isCorrect: false },
      { id: 'd', text: 'Ikatan peptida yang menandakan keberadaan protein', isCorrect: true },
    ],
    explanation: 'Uji Biuret positif berwarna ungu (violet) terjadi karena ion Cu2+ dalam lingkungan basa bereaksi membentuk kompleks koordinasi dengan atom nitrogen pada ikatan peptida (minimal dua ikatan peptida) dalam molekul protein.',
  },
  {
    id: 'q20',
    questionText: 'Buah pisang yang telah sangat matang dan berasa manis diuji laboratorium: saat ditetesi Lugol warna tetap cokelat kekuningan (negatif), namun saat diuji Benedict dan dipanaskan terbentuk endapan merah bata pekat (positif kuat). Kesimpulan analisis biologi yang paling tepat adalah...',
    category: 'lab',
    objective: 4,
    options: [
      { id: 'a', text: 'Amilum pada pisang telah terhidrolisis menjadi gula pereduksi (glukosa dan fruktosa) seiring proses pematangan buah', isCorrect: true },
      { id: 'b', text: 'Pisang matang kehilangan semua karbohidrat dan berganti menjadi lemak nabati', isCorrect: false },
      { id: 'c', text: 'Reagen Lugol telah rusak karena terurai oleh kandungan asam askorbat pisang', isCorrect: false },
      { id: 'd', text: 'Pisang hanya mengandung serat selulosa yang resisten terhadap enzim pencernaan', isCorrect: false },
    ],
    explanation: 'Selama proses pematangan (ripening), enzim amilase endogen pada pisang menghidrolisis cadangan pati (amilum) menjadi gula sederhana seperti glukosa dan fruktosa. Akibatnya kadar amilum turun drastis (Lugol negatif), sementara kadar gula pereduksi melimpah (Benedict positif merah bata).',
  },

  // =========================================================================
  // OBJECTIVE 5: PENYERAPAN ZAT MAKANAN (q21 - q25)
  // =========================================================================
  {
    id: 'q21',
    questionText: 'Organ saluran pencernaan yang menjadi tempat utama berlangsungnya penyerapan (absorpsi) sekitar 90% seluruh sari makanan dan cairan bernutrisi ke sirkulasi tubuh adalah...',
    category: 'penyerapan',
    objective: 5,
    options: [
      { id: 'a', text: 'Lambung (Ventrikulus)', isCorrect: false },
      { id: 'b', text: 'Usus halus (Intestinum tenue)', isCorrect: true },
      { id: 'c', text: 'Usus besar (Kolon)', isCorrect: false },
      { id: 'd', text: 'Esofagus (Kerongkongan)', isCorrect: false },
    ],
    explanation: 'Usus halus (terutama jejunum dan ileum) merupakan organ utama penyerapan nutrisi hasil pencernaan. Lambung hanya menyerap sedikit zat seperti alkohol dan obat tertentu, sedangkan usus besar bertugas menyerap air dan elektrolit dari sisa makanan.',
  },
  {
    id: 'q22',
    questionText: 'Dinding mukosa usus halus memiliki lipatan sirkuler yang dipenuhi oleh jutaan tonjolan mikroskopis menyerupai jari yang disebut jonjot usus (vili). Fungsi adaptasi anatomis vili tersebut adalah...',
    category: 'penyerapan',
    objective: 5,
    options: [
      { id: 'a', text: 'Memperkuat gerakan peristaltik mekanik saat kimus bertekstur kasar', isCorrect: false },
      { id: 'b', text: 'Mencegah aliran darah balik dari vena cava inferior menuju lumen usus', isCorrect: false },
      { id: 'c', text: 'Memperluas area permukaan secara dramatis agar penyerapan zat makanan berlangsung cepat dan efisien', isCorrect: true },
      { id: 'd', text: 'Membendung koloni bakteri Escherichia coli agar tidak keluar dari usus', isCorrect: false },
    ],
    explanation: 'Keberadaan lipatan mukosa, vili, dan mikrovili melipatgandakan luas permukaan dalam usus halus hingga ratusan kali lipat. Permukaan yang luar biasa luas ini menjamin penyerapan nutrien terlarut dapat berlangsung dengan kecepatan dan efisiensi tinggi.',
  },
  {
    id: 'q23',
    questionText: 'Produk akhir hasil pencernaan lemak (asam lemak rantai panjang dan monogliserida) yang diserap oleh sel epitel enterosit usus halus disalurkan ke peredaran tubuh melalui...',
    category: 'penyerapan',
    objective: 5,
    options: [
      { id: 'a', text: 'Pembuluh kil / lakteal (kapiler sistem limfatik)', isCorrect: true },
      { id: 'b', text: 'Vena porta hepatika menuju organ hati', isCorrect: false },
      { id: 'c', text: 'Arteri mesenterika superior', isCorrect: false },
      { id: 'd', text: 'Duktus pankreatikus utama', isCorrect: false },
    ],
    explanation: 'Di dalam enterosit, asam lemak dan monogliserida dirakit kembali menjadi trigliserida lalu dikemas menjadi lipoprotein bernama kilomikron. Karena partikel kilomikron terlalu besar untuk kapiler darah, ia diabsorpsi ke pembuluh kil (lakteal/limfa) sebelum bermuara ke vena subklavia.',
  },
  {
    id: 'q24',
    questionText: 'Nutrisi hasil pencernaan seperti glukosa dan asam amino yang diserap oleh anyaman kapiler darah pada vili usus halus akan diangkut pertama kali menuju organ hati melalui pembuluh darah...',
    category: 'penyerapan',
    objective: 5,
    options: [
      { id: 'a', text: 'Aorta abdominalis', isCorrect: false },
      { id: 'b', text: 'Vena renalis dextra', isCorrect: false },
      { id: 'c', text: 'Arteri hepatika propria', isCorrect: false },
      { id: 'd', text: 'Vena porta hepatika', isCorrect: true },
    ],
    explanation: 'Darah kaya sari makanan (glukosa, asam amino, vitamin larut air) dari kapiler usus dikumpulkan ke dalam sistem vena porta hepatika langsung menuju hati (hepar) untuk proses regulasi metabolik, detoksifikasi racun, dan penyimpanan glikogen.',
  },
  {
    id: 'q25',
    questionText: 'Berkat kombinasi lipatan sirkuler Kerckring, jutaan vili, dan miliaran mikrovili (brush border), estimasi total luas permukaan bidang penyerapan usus halus manusia dewasa dapat mencapai setara dengan...',
    category: 'penyerapan',
    objective: 5,
    options: [
      { id: 'a', text: '0,5 meter persegi (kira-kira seukuran selembar handuk kecil)', isCorrect: false },
      { id: 'b', text: '5 meter persegi (kira-kira seukuran luas lantai kamar mandi)', isCorrect: false },
      { id: 'c', text: '200 hingga 300 meter persegi (kira-kira seukuran lapangan tenis standar)', isCorrect: true },
      { id: 'd', text: '5.000 meter persegi (kira-kira seukuran stadion sepak bola)', isCorrect: false },
    ],
    explanation: 'Lipatan sirkuler memperluas 3x lipat, vili memperluas 10x lipat, dan mikrovili memperluas 20x lipat. Penggandaan bertingkat ini menghasilkan total luas permukaan penyerapan efektif usus halus sekitar 200–300 m² (setara lapangan tenis), memaksimalkan absorpsi nutrien.',
  },
]
