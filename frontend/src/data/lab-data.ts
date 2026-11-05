/**
 * Data Laboratorium Virtual Uji Zat Makanan
 * Kurikulum Biologi SMA Kelas XI
 */

import { PengujianData, SampelMakanan, JenisPengujian, HasilPengujian } from '@/types/lab'

/**
 * Daftar sampel bahan makanan yang diuji di laboratorium virtual
 */
export const SAMPEL_MAKANAN: SampelMakanan[] = [
  {
    id: 'nasi',
    nama: 'Nasi Putih',
    emoji: '🍚',
    kandunganAmilum: true,
    kandunganProtein: false,
    kandunganGula: false,
    deskripsi: 'Nasi putih kaya akan karbohidrat kompleks berupa pati (amilum) sebagai sumber energi utama tubuh, namun memiliki kadar protein dan gula sederhana bebas yang sangat rendah.'
  },
  {
    id: 'telur-rebus',
    nama: 'Telur Rebus',
    emoji: '🦚',
    kandunganAmilum: false,
    kandunganProtein: true,
    kandunganGula: false,
    deskripsi: 'Telur rebus mengandung protein bernilai biologis tinggi (terutama albumin pada putih telur), tanpa kandungan amilum atau gula pereduksi.'
  },
  {
    id: 'pisang',
    nama: 'Pisang',
    emoji: '🍌',
    kandunganAmilum: false,
    kandunganProtein: false,
    kandunganGula: true,
    deskripsi: 'Buah pisang matang kaya akan gula pereduksi sederhana seperti glukosa dan fruktosa yang mudah diserap, dengan kandungan amilum yang telah banyak terkonversi menjadi gula.'
  },
  {
    id: 'susu',
    nama: 'Susu Sapi',
    emoji: '🥛',
    kandunganAmilum: false,
    kandunganProtein: true,
    kandunganGula: true,
    deskripsi: 'Susu murni mengandung protein lengkap (kasein dan whey) serta gula disakarida pereduksi berupa laktosa (gula susu), tetapi tidak mengandung amilum sama sekali.'
  },
  {
    id: 'kentang',
    nama: 'Kentang',
    emoji: '🫔',
    kandunganAmilum: true,
    kandunganProtein: false,
    kandunganGula: false,
    deskripsi: 'Umbi kentang merupakan sumber cadangan makanan tanaman yang sangat kaya butiran amilum (pati), dengan kandungan protein dan gula bebas yang minimal.'
  },
  {
    id: 'roti',
    nama: 'Roti Tawar',
    emoji: '🍞',
    kandunganAmilum: true,
    kandunganProtein: false,
    kandunganGula: true,
    deskripsi: 'Roti terbuat dari tepung gandum yang kaya amilum, serta dalam proses pembuatannya ditambahkan gula pereduksi sehingga positif pada uji amilum dan gula.'
  },
  {
    id: 'tempe',
    nama: 'Tempe',
    emoji: '🧈',
    kandunganAmilum: false,
    kandunganProtein: true,
    kandunganGula: false,
    deskripsi: 'Tempe merupakan produk fermentasi kedelai yang padat protein nabati dengan rantai peptida dan asam amino mudah cerna, tanpa kandungan pati atau gula bebas.'
  },
  {
    id: 'madu',
    nama: 'Madu Murni',
    emoji: '🍯',
    kandunganAmilum: false,
    kandunganProtein: false,
    kandunganGula: true,
    deskripsi: 'Madu murni merupakan larutan alami pekat yang didominasi oleh gula pereduksi fruktosa dan glukosa, tanpa kandungan amilum maupun protein.'
  }
]

/**
 * Daftar metode pengujian zat makanan beserta reagen, prosedur, dan indikator warna
 */
export const LAB_PENGUJIAN: PengujianData[] = [
  {
    id: 'amilum',
    nama: 'Uji Amilum (Lugol)',
    reagen: 'Reagen Lugol (Iodium)',
    tujuan: 'Mendeteksi keberadaan amilum (karbohidrat kompleks / pati) pada sampel bahan makanan.',
    prosedur: [
      'Siapkan sampel makanan halus sebanyak 2-3 mL dalam tabung reaksi atau pelat tetes.',
      'Teteskan 3 tetes larutan Lugol (iodium) ke dalam sampel.',
      'Goyang perlahan dan amati perubahan warna yang terbentuk.'
    ],
    warnaPositif: 'BIRU KEHITAMAN',
    warnaNegatif: 'KUNING COKLAT',
    warnaCSSPositif: '#1a237e',
    warnaCSSNegatif: '#f59e0b',
    prinsip: 'Iodium bereaksi dengan amilum membentuk kompleks iodin-amilopektin berwarna biru kehitaman.',
    kesimpulanPositif: 'Sampel mengandung amilum/karbohidrat kompleks.',
    kesimpulanNegatif: 'Sampel tidak mengandung amilum.'
  },
  {
    id: 'protein',
    nama: 'Uji Protein (Biuret)',
    reagen: 'Reagen Biuret (NaOH + CuSO4)',
    tujuan: 'Mendeteksi keberadaan ikatan peptida (protein) pada sampel bahan makanan.',
    prosedur: [
      'Siapkan sampel makanan sebanyak 2-3 mL dalam tabung reaksi.',
      'Tambahkan 10 tetes larutan NaOH 10% untuk menciptakan suasana basa.',
      'Tambahkan 3 tetes larutan CuSO4 1% (reagen Biuret).',
      'Kocok tabung perlahan dan amati perubahan warna larutan.'
    ],
    warnaPositif: 'UNGU VIOLET',
    warnaNegatif: 'BIRU MUDA',
    warnaCSSPositif: '#6b21a8',
    warnaCSSNegatif: '#bae6fd',
    prinsip: 'Ion Cu2+ bereaksi dengan ikatan peptida dalam protein membentuk kompleks berwarna ungu.',
    kesimpulanPositif: 'Sampel mengandung protein.',
    kesimpulanNegatif: 'Sampel tidak mengandung protein.'
  },
  {
    id: 'gula',
    nama: 'Uji Gula Pereduksi (Benedict)',
    reagen: 'Reagen Benedict + pemanasan',
    tujuan: 'Mendeteksi keberadaan gula pereduksi (monosakarida seperti glukosa, fruktosa, dan disakarida pereduksi seperti maltosa, laktosa) pada bahan makanan.',
    prosedur: [
      'Siapkan sampel makanan cair atau suspensi sebanyak 2-3 mL dalam tabung reaksi.',
      'Tambahkan 5 tetes reagen Benedict ke dalam tabung.',
      'Panaskan tabung reaksi dalam penangas air bersuhu 65-80°C selama 2-5 menit.',
      'Amati pembentukan endapan dan perubahan warna larutan.'
    ],
    warnaPositif: 'MERAH BATA/ORANYE',
    warnaNegatif: 'BIRU',
    warnaCSSPositif: '#dc2626',
    warnaCSSNegatif: '#3b82f6',
    prinsip: 'Gula pereduksi mereduksi Cu2+ menjadi Cu+ membentuk endapan merah bata.',
    kesimpulanPositif: 'Sampel mengandung gula pereduksi (glukosa, fruktosa, maltosa, laktosa).',
    kesimpulanNegatif: 'Sampel tidak mengandung gula pereduksi.'
  }
]

/**
 * Menemukan data pengujian berdasarkan jenis pengujian
 */
export function getPengujianById(id: JenisPengujian): PengujianData | undefined {
  return LAB_PENGUJIAN.find((p) => p.id === id)
}

/**
 * Menemukan data sampel makanan berdasarkan ID
 */
export function getSampelById(id: string): SampelMakanan | undefined {
  return SAMPEL_MAKANAN.find((s) => s.id === id)
}

/**
 * Mengevaluasi hasil reaksi uji zat makanan berdasarkan sampel dan jenis pengujian
 */
export function evaluasiUji(sampel: SampelMakanan, jenis: JenisPengujian): HasilPengujian {
  switch (jenis) {
    case 'amilum':
      return sampel.kandunganAmilum ? 'positif' : 'negatif'
    case 'protein':
      return sampel.kandunganProtein ? 'positif' : 'negatif'
    case 'gula':
      return sampel.kandunganGula ? 'positif' : 'negatif'
    default:
      return null
  }
}
