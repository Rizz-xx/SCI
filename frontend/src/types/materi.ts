/**
 * Definisi Tipe Data Materi Sistem Pencernaan Manusia
 * Kurikulum Biologi SMA Kelas XI
 */

export type KategoriOrgan = 'utama' | 'pendukung'
export type KategoriProses = 'mekanik' | 'kimiawi'
export type KategoriNutrisi = 'karbohidrat' | 'protein' | 'lipid' | 'vitamin' | 'mineral' | 'air'

/**
 * Data anatomi dan fisiologi organ pencernaan
 */
export interface OrganData {
  id: string
  nama: string
  namaLatin: string
  slug: string
  kategori: KategoriOrgan
  deskripsi: string
  fungsiUtama: string[]
  prosesDigesti: string
  faktaMenarik: string
  lokasiTubuh: string
  ukuran: string
  warnaSVG: string
  ikonEmoji: string
}

/**
 * Data komparasi proses pencernaan mekanik vs kimiawi
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

/**
 * Data enzim pencernaan dan karakteristik biokimianya
 */
export interface EnzimData {
  id: string
  nama: string
  organPenghasil: string
  organBekerja: string
  substrat: string
  produk: string
  phOptimum: string
  fungsi: string
  mekanismeKerja?: string
  keterangan?: string
}

/**
 * Data penyerapan zat gizi pada saluran pencernaan
 */
export interface PenyerapanData {
  id: string
  namaNutrisi: string
  kategori: KategoriNutrisi
  tempatPenyerapan: string
  mekanisme: string
  jalurTransport: string
  deskripsi: string
  faktorMempengaruhi?: string[]
}

/**
 * Tahapan simulasi / animasi perjalanan makanan
 */
export interface AnimationStage {
  id: string
  tahap: number
  nama: string
  organId: string
  organNama: string
  durasi: number // durasi dalam milidetik atau detik
  deskripsi: string
  aktivitasMekanik: string
  aktivitasKimiawi: string
  visualCue?: string
  enzimTerlibat?: string[]
}
