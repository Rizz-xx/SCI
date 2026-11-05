/**
 * Definisi Tipe Data Laboratorium Virtual Uji Zat Makanan
 * Kurikulum Biologi SMA Kelas XI
 */

export type JenisPengujian = 'amilum' | 'protein' | 'gula'
export type HasilPengujian = 'positif' | 'negatif' | null

export interface SampelMakanan {
  id: string
  nama: string
  emoji: string
  kandunganAmilum: boolean
  kandunganProtein: boolean
  kandunganGula: boolean
  deskripsi: string
}

export interface PengujianData {
  id: JenisPengujian
  nama: string
  reagen: string
  tujuan: string
  prosedur: string[]
  warnaPositif: string
  warnaNegatif: string
  warnaCSSPositif: string // CSS color value (hex/rgb)
  warnaCSSNegatif: string // CSS color value (hex/rgb)
  prinsip: string // penjelasan ilmiah reaksi
  kesimpulanPositif: string
  kesimpulanNegatif: string
}

export interface LabState {
  jenisPengujian: JenisPengujian | null
  sampelDipilih: string | null
  tahapSaat: number // 0=pilih sampel, 1=pilih reagen, 2=proses, 3=hasil
  isAnimating: boolean
  hasil: HasilPengujian
  warnaTubung: string
  warnaTabung?: string // Alias toleran untuk warna cairan tabung
}
