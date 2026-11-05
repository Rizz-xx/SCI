/**
 * Data Tahapan Animasi Interaktif Perjalanan Makanan
 * Kurikulum Biologi SMA Kelas XI
 */

export interface AnimationStage {
  id: number
  nama: string
  organ: string
  durasi: number  // durasi animasi dalam detik
  deskripsi: string  // penjelasan ringkas untuk panel UI
  detailProses: string  // penjelasan lengkap tahapan
  warna: string  // kode hex warna sorotan organ
  posisiY: string  // persentase koordinat vertikal dalam kanvas anatomi SVG
  animasiTipe: 'chewing' | 'peristaltic' | 'churning' | 'enzymatic' | 'absorption' | 'excretion'
  poinPenting: string[]  // 3 poin penting yang ditampilkan pada layar
}

export const ANIMATION_STAGES: AnimationStage[] = [
  {
    id: 1,
    nama: 'Ingesti & Mastikasi (Pengunyahan)',
    organ: 'Mulut (Cavum Oris)',
    durasi: 6,
    deskripsi: 'Makanan dipotong dan dihaluskan oleh gigi, dilumasi air liur, dan dicerna secara kimiawi oleh enzim ptialin menjadi bolus lunak.',
    detailProses: 'Di dalam rongga mulut, makanan padat mengalami proses mekanik mastikasi (pengunyahan) oleh gigi seri, taring, dan geraham. Kelenjar ludah menyemprotkan saliva yang mengandung lendir musin dan enzim amilase saliva (ptialin). Ptialin mulai menghidrolisis ikatan glikosidik pada amilum menjadi disakarida maltosa. Lidah mengaduk dan memadatkan makanan basah tersebut menjadi gumpalan bulat licin yang dinamakan bolus, siap untuk didorong ke faring.',
    warna: '#10b981',
    posisiY: '12%',
    animasiTipe: 'chewing',
    poinPenting: [
      'Gigi memotong dan menggilas makanan untuk memperluas luas bidang kontak enzim',
      'Enzim amilase saliva (ptialin) mencerna amilum menjadi maltosa pada pH netral 6,8-7,0',
      'Lidah membentuk dan meluncurkan bolus bulat padat menuju faring melalui deglutisi'
    ]
  },
  {
    id: 2,
    nama: 'Propulsi & Gerak Peristaltik',
    organ: 'Kerongkongan (Esofagus)',
    durasi: 5,
    deskripsi: 'Bolus meluncur turun melewati saluran kerongkongan sepanjang 25 cm didorong oleh gelombang kontraksi otot polos ritmis.',
    detailProses: 'Setelah refleks menelan menutup katup epiglotis agar jalan napas aman, bolus memasuki esofagus. Otot dinding kerongkongan melakukan gerak peristaltik involunter: lapisan otot melingkar (sirkular) di belakang bolus berkontraksi kuat menekan bolus maju, sementara otot memanjang (longitudinal) di depannya berelaksasi melebarkan saluran. Lendir mukosa memudahkan pergesekan, mengantarkan bolus menuju lambung dalam rentang waktu sekitar 4 hingga 8 detik tanpa terjadi pencernaan kimiawi.',
    warna: '#0ea5e9',
    posisiY: '25%',
    animasiTipe: 'peristaltic',
    poinPenting: [
      'Katup epiglotis menutup laring mencegah makanan masuk ke saluran trakea',
      'Gelombang kontraksi peristaltik mengalirkan makanan secara aktif, bahkan jika posisi tubuh terbalik',
      'Sfingter esofagus bawah (LES) membuka untuk menerima bolus lalu segera menutup mencegah refluks asam'
    ]
  },
  {
    id: 3,
    nama: 'Pencernaan Lambung & Triturasi (Pengadukan)',
    organ: 'Lambung (Gaster)',
    durasi: 8,
    deskripsi: 'Bolus diaduk hebat oleh 3 lapis otot dinding lambung, direndam asam klorida (HCl), dan dipecah oleh enzim pepsin menjadi bubur kimus.',
    detailProses: 'Di dalam lambung, bolus ditampung dan mengalami churning hebat oleh kontraksi tiga lapis otot lambung (sirkular, longitudinal, dan oblik). Sel parietal mengeluarkan HCl pekat (pH 1,5-2,0) yang membunuh mikroba patogen dan mengaktifkan pepsinogen menjadi enzim protease pepsin. Pepsin memutus rantai protein menjadi pepton dan proteosa. Setelah diaduk dan dicerna intensif selama 3 hingga 4 jam, bolus padat bertransformasi menjadi cairan suspensi kental berwarna kekuningan bernama kimus (chyme). Sfingter pilorus kemudian membuka sedikit demi sedikit mengalirkan kimus ke usus halus.',
    warna: '#f59e0b',
    posisiY: '42%',
    animasiTipe: 'churning',
    poinPenting: [
      'Tiga lapisan otot lambung mengocok bolus menjadi suspensi semi-cair bernama kimus (chyme)',
      'Asam klorida (HCl, pH 1,5-2,0) mensterilkan makanan dan mengaktifkan pepsinogen menjadi pepsin',
      'Enzim pepsin memecah protein kompleks menjadi fragmen pepton dan proteosa'
    ]
  },
  {
    id: 4,
    nama: 'Digesti Enzimatis & Penyerapan Sari Makanan',
    organ: 'Usus Halus (Duodenum, Jejunum, Ileum)',
    durasi: 9,
    deskripsi: 'Kimus dinetralkan bikarbonat, diemulsikan empedu, dicerna enzim pankreas & usus, lalu sari makanan diserap oleh jutaan vili.',
    detailProses: 'Di duodenum, kimus asam dinetralkan oleh natrium bikarbonat (NaHCO3) pankreas dan dicampur getah empedu dari kantung empedu untuk emulsifikasi lemak. Enzim tripsin, amilase pankreas, dan lipase pankreas bersama enzim mikrovili usus (maltase, sukrase, laktase, peptidase) menuntaskan pemecahan seluruh nutrien menjadi molekul monosakarida, asam amino, dan asam lemak. Di jejunum dan ileum, permukaan lipatan vili dan mikrovili seluas 200 m² menyerap glukosa dan asam amino ke kapiler darah porta hepatika, serta menyerap asam lemak ke pembuluh kil limfa.',
    warna: '#8b5cf6',
    posisiY: '60%',
    animasiTipe: 'enzymatic',
    poinPenting: [
      'Empedu mengemulsikan lemak menjadi misel sehingga lipase pankreas dapat menghidrolisis lipid secara cepat',
      'Enzim pankreas dan brush border mikrovili menuntaskan digesti karbohidrat, protein, dan lipid',
      'Jutaan vili dan mikrovili menyerap lebih dari 90% seluruh sari makanan, air, dan vitamin'
    ]
  },
  {
    id: 5,
    nama: 'Reabsorpsi Air & Pembentukan Feses',
    organ: 'Usus Besar (Kolon)',
    durasi: 6,
    deskripsi: 'Sisa serat dan ampas yang tak terserap diserap kembali air dan mineralnya, difermentasi bakteri simbiotik, lalu dipadatkan.',
    detailProses: 'Material residu yang tidak tercerna di usus halus melintasi katup ileosekal memasuki sekum dan kolon usus besar. Usus besar mereabsorpsi sekitar 1 hingga 1,5 liter sisa air dan elektrolit kembali ke dalam darah, mengubah ampas cair menjadi massa padat. Triliunan bakteri mikrobioma (seperti Escherichia coli) memfermentasi sisa serat selulosa, menghasilkan vitamin K dan vitamin B kompleks yang penting bagi tubuh, serta membentuk gas. Feses dilapisi mukus pelindung dan dialirkan melalui gerak peristaltik massa menuju rektum.',
    warna: '#ec4899',
    posisiY: '75%',
    animasiTipe: 'absorption',
    poinPenting: [
      'Menyerap kembali sekitar 90% sisa air residu dan elektrolit untuk mencegah dehidrasi tubuh',
      'Mikrobioma simbiotik usus memfermentasi serat dan mensintesis vitamin K serta vitamin B',
      'Mengubah sisa ampas pencernaan menjadi feses padat dan menyalurkannya menuju rektum'
    ]
  },
  {
    id: 6,
    nama: 'Eliminasi & Defekasi Feses',
    organ: 'Anus dan Rektum',
    durasi: 5,
    deskripsi: 'Peregangan ampula rektum memicu refleks defekasi, diatur oleh sfingter internal involunter dan sfingter eksternal volunter.',
    detailProses: 'Massa feses yang terkumpul meregangkan dinding ampula rektum, membangkitkan impuls saraf sensorik ke sumsum tulang belakang sakral untuk memicu refleks defekasi. Gelombang peristaltik sigmoid dan rektum meningkat, sementara sfingter anus internal (otot polos involunter) berelaksasi membuka secara otomatis. Pengeluaran feses akhir dikontrol penuh oleh sfingter anus eksternal (otot lurik volunter). Saat individu memutuskan untuk buang air besar, sfingter eksternal berelaksasi disertai peningkatan tekanan intra-abdomen untuk mengeluarkan feses keluar tubuh secara tuntas.',
    warna: '#94a3b8',
    posisiY: '90%',
    animasiTipe: 'excretion',
    poinPenting: [
      'Peregangan dinding rektum mengirimkan impuls refleks defekasi ke medula spinalis sakral',
      'Sfingter ani internal (otot polos) relaksasi secara involunter menimbulkan sensasi dorongan buang air',
      'Sfingter ani eksternal (otot lurik) di bawah kontrol kesadaran mengatur waktu eliminasi feses secara volunter'
    ]
  }
]
