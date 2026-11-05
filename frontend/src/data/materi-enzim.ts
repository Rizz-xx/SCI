/**
 * Data Enzim Pencernaan Manusia
 * Kurikulum Biologi SMA Kelas XI
 */

export interface EnzimData {
  id: string
  nama: string
  namaLain?: string
  dihasilkanOleh: string
  bekerjadiOrgan: string
  substrat: string
  produk: string
  phOptimal: string
  suhuOptimal: string
  fungsiLengkap: string
  reaksiKimia: string
  contohMakanan: string[]
}

export const ENZIM_DATA: EnzimData[] = [
  {
    id: 'amilase-saliva',
    nama: 'Amilase Saliva',
    namaLain: 'Ptialin',
    dihasilkanOleh: 'Kelenjar ludah / saliva (Glandula parotis, submandibularis, dan sublingualis)',
    bekerjadiOrgan: 'Mulut (Rongga Mulut)',
    substrat: 'Amilum (polisakarida matang / pati)',
    produk: 'Maltosa (disakarida), maltotriosa, dan dekstrin batas',
    phOptimal: '6,8 – 7,0 (Netral mendekati sedikit asam)',
    suhuOptimal: '37°C (Suhu normal tubuh)',
    fungsiLengkap: 'Enzim hidrolase pertama yang berkontak dengan makanan. Bertugas memutus ikatan alfa-1,4-glikosidik pada molekul amilum matang (matang setelah proses pemasakan) secara acak, merombak rantai panjang polisakarida menjadi unit disakarida maltosa. Aktivitasnya akan terhenti seketika saat bolus ditelan dan terendam dalam getah asam lambung karena lingkungan pH di bawah 4 mendenaturasi struktur protein enzim ini.',
    reaksiKimia: '(C6H10O5)n [Amilum] + n/2 H2O --(Amilase Saliva)--> n/2 C12H22O11 [Maltosa]',
    contohMakanan: [
      'Nasi putih dan nasi merah',
      'Roti tawar dan biskuit',
      'Kentang rebus atau panggang',
      'Ubi jalar dan singkong',
      'Jagung dan gandum'
    ]
  },
  {
    id: 'pepsin',
    nama: 'Pepsin',
    namaLain: 'Protease Lambung',
    dihasilkanOleh: 'Sel utama (Chief cells) kelenjar lambung dalam bentuk zimogen inaktif pepsinogen, diaktivasi oleh HCl',
    bekerjadiOrgan: 'Lambung',
    substrat: 'Protein (polipeptida panjang kompleks)',
    produk: 'Pepton, proteosa, dan oligopeptida rantai pendek',
    phOptimal: '1,5 – 2,0 (Sangat asam)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Endopeptidase kuat yang memutus ikatan peptida internal pada molekul protein, terutama ikatan yang melibatkan asam amino aromatik dan hidrofobik seperti tirosin, fenilalanin, dan triptofan. Pepsin disintesis dan disekresikan sebagai proenzim inaktif (pepsinogen) guna mencegah perusakan sel kelenjar lambung sendiri. Pepsinogen baru terpotong menjadi pepsin aktif setelah terpapar asam klorida (HCl). Begitu terbentuk, pepsin juga mengaktivasi pepsinogen lain secara autokatalitik.',
    reaksiKimia: 'Protein + H2O --(Pepsin / pH 1,5-2,0)--> Pepton + Proteosa + Polipeptida Pendek',
    contohMakanan: [
      'Daging sapi, kambing, dan ayam',
      'Putih telur (albumin)',
      'Ikan dan makanan laut (seafood)',
      'Tahu, tempe, dan kacang kedelai',
      'Susu dan produk olahannya'
    ]
  },
  {
    id: 'renin',
    nama: 'Renin',
    namaLain: 'Kimosin (Chymosin)',
    dihasilkanOleh: 'Chief cells kelenjar lambung (sangat melimpah pada bayi dan mamalia menyusui)',
    bekerjadiOrgan: 'Lambung (terutama pada bayi)',
    substrat: 'Kaseinogen (protein kasein larut pada susu cair)',
    produk: 'Parakasein (kasein terkoagulasi/mengendap) yang berikatan dengan kalsium membentuk kalsium parakaseinat (gumpalan dadih)',
    phOptimal: '5,0 – 6,5 (Sedikit asam, sesuai kondisi pH lambung bayi yang belum terlalu asam)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Enzim protease koagulasi yang secara khusus mengendapkan protein kasein larut di dalam air susu ibu (ASI) atau susu formula menjadi endapan padat (curd/dadih). Koagulasi ini sangat penting pada bayi agar susu cair tidak langsung meluncur cepat melewati lambung ke duodenum, sehingga gumpalan protein susu dapat tertahan lebih lama di dalam lambung untuk dicerna secara seksama oleh enzim pepsin.',
    reaksiKimia: 'Kaseinogen (larut) + Ca2+ --(Renin)--> Kalsium Parakaseinat (endapan dadih)',
    contohMakanan: [
      'Air Susu Ibu (ASI)',
      'Susu sapi murni dan susu kambing',
      'Susu formula bayi'
    ]
  },
  {
    id: 'amilase-pankreas',
    nama: 'Amilase Pankreas',
    namaLain: 'Amilopsin',
    dihasilkanOleh: 'Sel asinus eksokrin pankreas, disalurkan melalui duktus pankreatikus',
    bekerjadiOrgan: 'Usus Halus (Duodenum dan Jejunum)',
    substrat: 'Amilum (baik amilum matang maupun amilum mentah yang belum tercerna di mulut)',
    produk: 'Maltosa (disakarida) dan isomaltosa',
    phOptimal: '7,5 – 8,2 (Alkalin / Basa lemah, didukung bikarbonat pankreas)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Melanjutkan dan menuntaskan pencernaan karbohidrat polisakarida yang belum sempat terhidrolisis tuntas oleh amilase saliva di mulut. Bekerja di dalam lumen usus halus dengan kecepatan hidrolisis tinggi dalam lingkungan alkalin netral, memotong ikatan alfa-1,4-glikosidik hingga seluruh amilum berubah menjadi molekul disakarida maltosa yang siap diserahkan ke enzim brush border membran enterosit.',
    reaksiKimia: 'Sisa Amilum + H2O --(Amilase Pankreas)--> Maltosa + Isomaltosa',
    contohMakanan: [
      'Nasi, lontong, dan ketupat',
      'Pasta, mi, dan bihun',
      'Havermut (oatmeal) dan sereal gandum',
      'Singkong, talas, dan sagu',
      'Kacang merah dan polong'
    ]
  },
  {
    id: 'tripsin',
    nama: 'Tripsin',
    namaLain: 'Protease Pankreas Utama',
    dihasilkanOleh: 'Sel asinus eksokrin pankreas dalam bentuk zimogen inaktif tripsinogen',
    bekerjadiOrgan: 'Usus Halus (Duodenum)',
    substrat: 'Protein, pepton, dan proteosa lanjutan hasil lambung',
    produk: 'Peptida rantai pendek (oligopeptida) dan asam amino bebas',
    phOptimal: '7,5 – 8,5 (Basa)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Endopeptidase yang sangat selektif memutus ikatan peptida pada sisi karboksil dari residu asam amino basa yaitu lisin dan arginin. Tripsin disekresikan pankreas sebagai tripsinogen inaktif demi keselamatan jaringan pankreas. Di duodenum, molekul heksapeptida terminal pada tripsinogen dipotong oleh enzim enteropeptidase (enterokinase) mukosa usus, menghasilkan tripsin aktif. Tripsin aktif kemudian berfungsi sebagai aktivator master yang mengaktifkan sisa tripsinogen, kimotripsinogen, prokarboksipeptidase, dan proelastase.',
    reaksiKimia: 'Pepton / Protein + H2O --(Tripsin)--> Polipeptida Pendek + Dipeptida',
    contohMakanan: [
      'Daging ayam dan daging sapi',
      'Ikan tuna, salmon, dan tongkol',
      'Telur ayam dan bebek',
      'Keju, yogurt, dan susu kedelai',
      'Kacang tanah, almond, dan kacang mete'
    ]
  },
  {
    id: 'lipase-pankreas',
    nama: 'Lipase Pankreas',
    namaLain: 'Steapsin',
    dihasilkanOleh: 'Sel asinus eksokrin pankreas',
    bekerjadiOrgan: 'Usus Halus (Duodenum dan Jejunum)',
    substrat: 'Trigliserida (lemak netral) yang telah diemulsikan oleh garam empedu',
    produk: 'Asam lemak bebas (FFA) dan 2-monogliserida (serta sedikit gliserol bebas)',
    phOptimal: '7,5 – 8,5 (Basa lemah)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Enzim hidrolitik lipid paling utama dalam sistem pencernaan manusia. Lemak bersifat hidrofobik dan cenderung membentuk globula besar dalam lingkungan berair, sehingga tidak dapat diserang langsung oleh lipase yang larut air. Setelah garam empedu mengemulsikan lemak menjadi misel-misel kecil, lipase pankreas dibantu oleh protein kofaktor kolipase menempel pada permukaan antarmuka lipid-air dan memutus ikatan ester pada posisi 1 dan 3 trigliserida, membebaskan dua asam lemak dan satu monogliserida yang siap diserap enterosit.',
    reaksiKimia: 'Trigliserida (Emulsi) + 2 H2O --(Lipase Pankreas + Kolipase)--> 2 Asam Lemak Bebas + 2-Monogliserida',
    contohMakanan: [
      'Minyak kelapa sawit, minyak zaitun, dan mentega',
      'Alpukat dan kelapa',
      'Kuning telur',
      'Daging berlemak dan jeroan',
      'Santan dan kacang-kacangan berlemak tinggi'
    ]
  },
  {
    id: 'maltase',
    nama: 'Maltase',
    namaLain: 'Alfa-glukosidase',
    dihasilkanOleh: 'Mikrovili sel enterosit dinding usus halus (Brush border enzyme)',
    bekerjadiOrgan: 'Usus Halus (Permukaan membran sel epitel Jejunum & Ileum)',
    substrat: 'Maltosa (gula gandum/disakarida hasil amilase)',
    produk: '2 molekul Glukosa (monosakarida)',
    phOptimal: '7,0 – 8,0 (Netral hingga basa lemah)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Enzim membran yang berlabuh pada mikrovili enterosit usus halus. Maltase memutus ikatan alfa-1,4-glikosidik pada disakarida maltosa, memecah satu molekul maltosa menjadi dua molekul glukosa murni. Karena glukosa merupakan monosakarida monomer, molekul ini dapat segera ditranspor menembus membran enterosit melalui kotransporter SGLT-1 (Sodium-Glucose Linked Transporter 1) secara transpor aktif sekunder masuk ke kapiler darah vili.',
    reaksiKimia: 'C12H22O11 [Maltosa] + H2O --(Maltase)--> 2 C6H12O6 [Glukosa]',
    contohMakanan: [
      'Produk olahan malt dan kecap manis',
      'Sereal gandum dan jelai (barley)',
      'Ubi jalar matang dan sirup jagung',
      'Roti dan biji-bijian berkecambah'
    ]
  },
  {
    id: 'sukrase',
    nama: 'Sukrase',
    namaLain: 'Invertase / Sakarase',
    dihasilkanOleh: 'Mikrovili sel enterosit dinding usus halus (Brush border enzyme)',
    bekerjadiOrgan: 'Usus Halus (Jejunum dan Ileum)',
    substrat: 'Sukrosa (gula tebu / gula pasir / disakarida non-pereduksi)',
    produk: '1 molekul Glukosa + 1 molekul Fruktosa',
    phOptimal: '6,5 – 7,5 (Netral)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Enzim disakaridase yang menghidrolisis ikatan alfa-1,beta-2-glikosidik antara monomer glukosa dan fruktosa pada molekul sukrosa. Sukrosa banyak dijumpai pada gula meja, buah-buahan manis, dan makanan penutup. Hasil pemecahannya berupa glukosa yang diserap via SGLT-1 dan fruktosa yang diserap melalui difusi terfasilitasi via transporter GLUT-5, keduanya kemudian dialirkan ke sistem vena porta.',
    reaksiKimia: 'C12H22O11 [Sukrosa] + H2O --(Sukrase)--> C6H12O6 [Glukosa] + C6H12O6 [Fruktosa]',
    contohMakanan: [
      'Gula pasir, gula tebu, dan gula merah / aren',
      'Madu dan sirup maple',
      'Buah-buahan manis (pisang matang, semangka, mangga, apel)',
      'Permen, kue manis, dan minuman berkarbonasi'
    ]
  },
  {
    id: 'laktase',
    nama: 'Laktase',
    namaLain: 'Laktase-florizin hidrolase (Beta-galaktosidase)',
    dihasilkanOleh: 'Mikrovili sel enterosit dinding usus halus (Brush border enzyme)',
    bekerjadiOrgan: 'Usus Halus (terutama di Jejunum bagian tengah)',
    substrat: 'Laktosa (gula alami susu mamalia)',
    produk: '1 molekul Glukosa + 1 molekul Galaktosa',
    phOptimal: '6,0 – 7,0 (Netral sedikit asam)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Enzim esensial yang bertugas memutus ikatan beta-1,4-galaktosidik pada molekul disakarida laktosa, melepaskan satu molekul glukosa dan satu molekul galaktosa untuk diabsorpsi tubuh. Produksi enzim laktase sangat melimpah pada bayi dan masa kanak-kanak. Pada sebagian populasi remaja dan dewasa, ekspresi gen laktase menurun secara alami (hipolaktasia dewasa), memicu intoleransi laktosa di mana laktosa yang tak tercerna difermentasi oleh bakteri usus besar menghasilkan gas dan diare osmotik.',
    reaksiKimia: 'C12H22O11 [Laktosa] + H2O --(Laktase)--> C6H12O6 [Glukosa] + C6H12O6 [Galaktosa]',
    contohMakanan: [
      'Susu sapi segar, susu kambing, dan susu kerbau',
      'Keju lunak (ricotta, mozzarella) dan krim kental',
      'Es krim dan puding susu',
      'Yogurt (meski sebagian laktosa telah difermentasi bakteri asam laktat)'
    ]
  },
  {
    id: 'erepsin-peptidase',
    nama: 'Erepsin / Peptidase Usus',
    namaLain: 'Dipeptidase dan Aminopeptidase',
    dihasilkanOleh: 'Sel kelenjar Lieberkühn dan mikrovili enterosit usus halus',
    bekerjadiOrgan: 'Usus Halus (Jejunum dan Ileum)',
    substrat: 'Peptida rantai pendek, tripeptida, dan dipeptida hasil digesti pepsin dan tripsin',
    produk: 'Asam amino bebas (monomer protein siap serap)',
    phOptimal: '7,5 – 8,5 (Basa)',
    suhuOptimal: '37°C',
    fungsiLengkap: 'Kompleks enzim eksopeptidase dan dipeptidase yang menyelesaikan tahap paling akhir dari pencernaan protein. Aminopeptidase memutus asam amino satu per satu dari ujung terminal-N bebas pada rantai oligopeptida, sedangkan dipeptidase memutus ikatan peptida tunggal pada dipeptida menjadi dua asam amino bebas terpisah. Asam amino bebas ini lalu diserap ke enterosit menggunakan sistem kotranspor natrium-asam amino sebelum dialirkan ke pembuluh darah kapiler vili.',
    reaksiKimia: 'Dipeptida / Oligopeptida + H2O --(Erepsin / Peptidase)--> Asam Amino Bebas',
    contohMakanan: [
      'Segala makanan sumber protein yang telah melewati pencernaan awal lambung dan tripsin:',
      'Daging ayam, kalkun, dan daging merah',
      'Ikan air tawar dan laut',
      'Telur dan olahan kedelai (tahu, tempe, edamame)',
      'Biji chia, lentil, dan kacang polong'
    ]
  }
]
