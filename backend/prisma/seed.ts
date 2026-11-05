import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Hapus data lama
  await prisma.quizAnswer.deleteMany();
  await prisma.quizSession.deleteMany();
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();

  // Buat 25 soal
  const questionsData = [
    // =========================================================================
    // OBJECTIVE 1: ORGAN (5 Soal, category: 'organ')
    // =========================================================================
    {
      questionText: 'Organ manakah yang berfungsi menghasilkan enzim pepsin yang berperan dalam pencernaan protein?',
      category: 'organ',
      objective: 1,
      options: [
        { text: 'Mulut', isCorrect: false },
        { text: 'Kerongkongan', isCorrect: false },
        {
          text: 'Lambung',
          isCorrect: true,
          explanation: 'Lambung menghasilkan pepsinogen yang diaktifkan oleh HCl menjadi pepsin, enzim yang mencerna protein menjadi pepton',
        },
        { text: 'Usus halus', isCorrect: false },
      ],
    },
    {
      questionText: 'Fungsi utama hati dalam sistem pencernaan manusia adalah...',
      category: 'organ',
      objective: 1,
      options: [
        { text: 'Menghasilkan insulin', isCorrect: false },
        {
          text: 'Menghasilkan cairan empedu untuk emulsifikasi lemak',
          isCorrect: true,
          explanation: 'Hati menghasilkan empedu yang disimpan di kantung empedu, berfungsi mengemulsikan lemak sehingga mudah dicerna lipase',
        },
        { text: 'Menyerap sari makanan', isCorrect: false },
        { text: 'Menghasilkan enzim amilase', isCorrect: false },
      ],
    },
    {
      questionText: 'Berapa panjang rata-rata usus halus manusia dewasa?',
      category: 'organ',
      objective: 1,
      options: [
        { text: '1-2 meter', isCorrect: false },
        { text: '3-4 meter', isCorrect: false },
        {
          text: '6-7 meter',
          isCorrect: true,
          explanation: 'Usus halus memiliki panjang 6-7 meter dengan tiga bagian: duodenum, jejunum, dan ileum',
        },
        { text: '10-12 meter', isCorrect: false },
      ],
    },
    {
      questionText: 'Organ pendukung yang berfungsi menyimpan dan memekatkan cairan empedu adalah...',
      category: 'organ',
      objective: 1,
      options: [
        { text: 'Hati', isCorrect: false },
        { text: 'Pankreas', isCorrect: false },
        {
          text: 'Kantung empedu',
          isCorrect: true,
          explanation: 'Kantung empedu menyimpan empedu yang diproduksi hati dan melepaskannya ke duodenum saat diperlukan untuk mencerna lemak',
        },
        { text: 'Usus halus', isCorrect: false },
      ],
    },
    {
      questionText: 'Proses peristaltik yang mendorong makanan melalui saluran pencernaan terutama dimulai di organ...',
      category: 'organ',
      objective: 1,
      options: [
        { text: 'Mulut', isCorrect: false },
        {
          text: 'Kerongkongan/esofagus',
          isCorrect: true,
          explanation: 'Peristaltik adalah kontraksi otot dinding saluran pencernaan yang mendorong makanan. Ini terutama dimulai di kerongkongan setelah menelan',
        },
        { text: 'Lambung', isCorrect: false },
        { text: 'Usus besar', isCorrect: false },
      ],
    },

    // =========================================================================
    // OBJECTIVE 2: PROSES (5 Soal, category: 'proses')
    // =========================================================================
    {
      questionText: 'Perbedaan utama antara pencernaan mekanik dan pencernaan kimiawi adalah...',
      category: 'proses',
      objective: 2,
      options: [
        { text: 'Tempat terjadinya', isCorrect: false },
        { text: 'Waktu yang diperlukan', isCorrect: false },
        {
          text: 'Keterlibatan enzim dan reaksi kimia',
          isCorrect: true,
          explanation: 'Pencernaan mekanik (fisik) memecah makanan secara fisik tanpa mengubah struktur kimia, sedangkan pencernaan kimiawi melibatkan enzim dan reaksi kimia yang mengubah struktur molekul makanan',
        },
        { text: 'Jenis makanan yang dicerna', isCorrect: false },
      ],
    },
    {
      questionText: 'Chyme adalah istilah untuk...',
      category: 'proses',
      objective: 2,
      options: [
        { text: 'Enzim pencernaan di mulut', isCorrect: false },
        {
          text: 'Massa makanan setengah cair hasil pencernaan di lambung',
          isCorrect: true,
          explanation: 'Chyme adalah campuran setengah cair berisi makanan yang sudah dicerna sebagian, asam lambung, dan enzim. Chyme secara bertahap dilepaskan ke usus halus',
        },
        { text: 'Cairan empedu dari hati', isCorrect: false },
        { text: 'Produk akhir pencernaan protein', isCorrect: false },
      ],
    },
    {
      questionText: 'Proses pengunyahan makanan di mulut termasuk jenis pencernaan...',
      category: 'proses',
      objective: 2,
      options: [
        { text: 'Kimiawi', isCorrect: false },
        {
          text: 'Mekanik',
          isCorrect: true,
          explanation: 'Pengunyahan adalah pencernaan mekanik karena gigi secara fisik memecah makanan menjadi bagian-bagian lebih kecil tanpa mengubah struktur kimia molekul makanan',
        },
        { text: 'Biologis', isCorrect: false },
        { text: 'Enzimatis', isCorrect: false },
      ],
    },
    {
      questionText: 'Pencernaan kimiawi pertama kali terjadi di...',
      category: 'proses',
      objective: 2,
      options: [
        { text: 'Kerongkongan', isCorrect: false },
        { text: 'Lambung', isCorrect: false },
        {
          text: 'Mulut',
          isCorrect: true,
          explanation: 'Pencernaan kimiawi pertama kali terjadi di mulut melalui enzim amilase saliva (ptialin) yang mengubah amilum menjadi maltosa',
        },
        { text: 'Usus halus', isCorrect: false },
      ],
    },
    {
      questionText: 'Gerak peristaltik pada kerongkongan berfungsi untuk...',
      category: 'proses',
      objective: 2,
      options: [
        { text: 'Mencerna makanan secara kimiawi', isCorrect: false },
        {
          text: 'Mendorong bolus makanan dari mulut ke lambung',
          isCorrect: true,
          explanation: 'Gerak peristaltik adalah kontraksi otot bergelombang yang mendorong bolus (gumpalan makanan) dari mulut ke lambung melalui kerongkongan dalam waktu 4-8 detik',
        },
        { text: 'Menyerap nutrisi', isCorrect: false },
        { text: 'Menghasilkan lendir pelindung', isCorrect: false },
      ],
    },

    // =========================================================================
    // OBJECTIVE 3: ENZIM (5 Soal, category: 'enzim')
    // =========================================================================
    {
      questionText: 'Enzim amilase saliva (ptialin) di mulut berfungsi mengubah...',
      category: 'enzim',
      objective: 3,
      options: [
        { text: 'Protein menjadi pepton', isCorrect: false },
        { text: 'Lemak menjadi asam lemak', isCorrect: false },
        {
          text: 'Amilum menjadi maltosa',
          isCorrect: true,
          explanation: 'Amilase saliva memecah amilum (pati) menjadi maltosa (disakarida) melalui hidrolisis ikatan glikosidik. Reaksi: Amilum + H₂O → Maltosa',
        },
        { text: 'Maltosa menjadi glukosa', isCorrect: false },
      ],
    },
    {
      questionText: 'Pada pH berapa enzim pepsin bekerja paling optimal?',
      category: 'enzim',
      objective: 3,
      options: [
        { text: 'pH 7-8 (netral-basa)', isCorrect: false },
        {
          text: 'pH 1.5-2.0 (sangat asam)',
          isCorrect: true,
          explanation: 'Pepsin adalah enzim proteolitik yang bekerja optimal pada pH sangat asam (1.5-2.0) di lambung, sesuai dengan kondisi asam yang diciptakan oleh HCl lambung',
        },
        { text: 'pH 6-7 (sedikit asam)', isCorrect: false },
        { text: 'pH 8-9 (basa)', isCorrect: false },
      ],
    },
    {
      questionText: 'Enzim yang dihasilkan pankreas untuk mencerna protein di usus halus adalah...',
      category: 'enzim',
      objective: 3,
      options: [
        { text: 'Pepsin', isCorrect: false },
        { text: 'Amilase saliva', isCorrect: false },
        {
          text: 'Tripsin',
          isCorrect: true,
          explanation: 'Pankreas menghasilkan tripsinogen yang diaktifkan oleh enterokinase menjadi tripsin. Tripsin memecah protein dan pepton menjadi peptida yang lebih pendek di usus halus',
        },
        { text: 'Lipase', isCorrect: false },
      ],
    },
    {
      questionText: 'Enzim lipase berperan dalam pencernaan...',
      category: 'enzim',
      objective: 3,
      options: [
        { text: 'Karbohidrat', isCorrect: false },
        { text: 'Protein', isCorrect: false },
        {
          text: 'Lemak',
          isCorrect: true,
          explanation: 'Lipase (terutama dari pankreas) mengkatalisis hidrolisis lemak (trigliserida) menjadi gliserol dan asam lemak. Reaksi ini dibantu empedu yang mengemulsikan lemak',
        },
        { text: 'Asam amino', isCorrect: false },
      ],
    },
    {
      questionText: 'Enzim yang mengubah peptida menjadi asam amino di usus halus adalah...',
      category: 'enzim',
      objective: 3,
      options: [
        { text: 'Pepsin', isCorrect: false },
        { text: 'Tripsin', isCorrect: false },
        {
          text: 'Erepsin/Peptidase',
          isCorrect: true,
          explanation: 'Erepsin (campuran peptidase) di usus halus memecah peptida menjadi asam amino individual yang siap diserap. Ini merupakan langkah akhir pencernaan protein',
        },
        { text: 'Amilase', isCorrect: false },
      ],
    },

    // =========================================================================
    // OBJECTIVE 4: LAB (5 Soal, category: 'lab')
    // =========================================================================
    {
      questionText: 'Reagen yang digunakan untuk menguji kandungan amilum pada makanan adalah...',
      category: 'lab',
      objective: 4,
      options: [
        { text: 'Reagen Benedict', isCorrect: false },
        { text: 'Reagen Biuret', isCorrect: false },
        {
          text: 'Larutan Lugol/Iodium',
          isCorrect: true,
          explanation: 'Larutan Lugol (iodin dalam kalium iodida) bereaksi dengan amilum membentuk kompleks iodin-amilopektin berwarna biru kehitaman. Ini adalah uji spesifik untuk amilum',
        },
        { text: 'HCl encer', isCorrect: false },
      ],
    },
    {
      questionText: 'Perubahan warna apa yang menunjukkan hasil positif pada uji amilum dengan Lugol?',
      category: 'lab',
      objective: 4,
      options: [
        { text: 'Merah bata', isCorrect: false },
        { text: 'Ungu violet', isCorrect: false },
        {
          text: 'Biru kehitaman',
          isCorrect: true,
          explanation: 'Hasil positif uji Lugol ditandai perubahan warna menjadi biru kehitaman, karena iodin berinterkalasi dalam heliks amilosa membentuk kompleks berwarna biru-hitam',
        },
        { text: 'Kuning-oranye', isCorrect: false },
      ],
    },
    {
      questionText: 'Reagen Benedict digunakan untuk menguji keberadaan...',
      category: 'lab',
      objective: 4,
      options: [
        { text: 'Protein dalam makanan', isCorrect: false },
        { text: 'Lemak dalam makanan', isCorrect: false },
        {
          text: 'Gula pereduksi dalam makanan',
          isCorrect: true,
          explanation: 'Reagen Benedict menguji gula pereduksi (glukosa, fruktosa, maltosa, laktosa). Gugus aldehida/keton pada gula pereduksi mereduksi Cu²⁺ menjadi Cu⁺ membentuk endapan merah bata',
        },
        { text: 'Amilum dalam makanan', isCorrect: false },
      ],
    },
    {
      questionText: 'Perubahan warna ungu/violet pada pengujian dengan reagen Biuret menunjukkan bahwa sampel mengandung...',
      category: 'lab',
      objective: 4,
      options: [
        { text: 'Karbohidrat', isCorrect: false },
        { text: 'Lemak', isCorrect: false },
        {
          text: 'Protein',
          isCorrect: true,
          explanation: 'Reagen Biuret (NaOH + CuSO₄) bereaksi dengan ikatan peptida dalam protein. Ion Cu²⁺ membentuk kompleks koordinasi dengan 4-6 atom nitrogen peptida menghasilkan warna ungu/violet',
        },
        { text: 'Mineral', isCorrect: false },
      ],
    },
    {
      questionText: 'Jika sampel pisang diuji dengan larutan Lugol, hasilnya adalah...',
      category: 'lab',
      objective: 4,
      options: [
        { text: 'Biru kehitaman (positif amilum)', isCorrect: false },
        { text: 'Merah bata (positif gula)', isCorrect: false },
        {
          text: 'Kuning-oranye (negatif amilum)',
          isCorrect: true,
          explanation: 'Pisang mengandung fruktosa dan sukrosa, bukan amilum. Uji Lugol akan menghasilkan warna kuning-oranye (negatif) karena tidak ada amilum yang bereaksi dengan iodium',
        },
        { text: 'Ungu (positif protein)', isCorrect: false },
      ],
    },

    // =========================================================================
    // OBJECTIVE 5: PENYERAPAN (5 Soal, category: 'penyerapan')
    // =========================================================================
    {
      questionText: 'Tempat utama penyerapan sari makanan (nutrisi) dalam sistem pencernaan adalah...',
      category: 'penyerapan',
      objective: 5,
      options: [
        { text: 'Lambung', isCorrect: false },
        { text: 'Usus besar', isCorrect: false },
        {
          text: 'Usus halus',
          isCorrect: true,
          explanation: 'Usus halus adalah tempat utama penyerapan nutrisi karena memiliki vili dan mikrovili yang memperluas permukaan penyerapan hingga sekitar 200 m², serta dilengkapi kapiler darah dan pembuluh kil',
        },
        { text: 'Mulut', isCorrect: false },
      ],
    },
    {
      questionText: 'Vili pada dinding usus halus berfungsi untuk...',
      category: 'penyerapan',
      objective: 5,
      options: [
        { text: 'Menghasilkan enzim pencernaan', isCorrect: false },
        {
          text: 'Memperluas permukaan penyerapan nutrisi',
          isCorrect: true,
          explanation: 'Vili adalah tonjolan seperti jari pada mukosa usus halus. Setiap vili memiliki mikrovili (brush border) sehingga total luas permukaan penyerapan mencapai 200 m², sangat efisien untuk menyerap nutrisi',
        },
        { text: 'Mendorong makanan ke usus besar', isCorrect: false },
        { text: 'Memproduksi lendir pelindung', isCorrect: false },
      ],
    },
    {
      questionText: 'Hasil pencernaan lemak berupa gliserol dan asam lemak diserap melalui...',
      category: 'penyerapan',
      objective: 5,
      options: [
        { text: 'Kapiler darah langsung', isCorrect: false },
        { text: 'Vena porta menuju hati', isCorrect: false },
        {
          text: 'Pembuluh kil (lacteal) menuju sistem limfa',
          isCorrect: true,
          explanation: 'Gliserol dan asam lemak diserap sel epitel usus halus, disintesis kembali menjadi trigliserida, lalu dibungkus menjadi kilomikron yang masuk pembuluh kil (lacteal) dan sistem limfa, akhirnya ke sirkulasi darah',
        },
        { text: 'Pembuluh arteri', isCorrect: false },
      ],
    },
    {
      questionText: 'Glukosa dan asam amino hasil penyerapan di usus halus dibawa oleh kapiler darah menuju...',
      category: 'penyerapan',
      objective: 5,
      options: [
        { text: 'Jantung langsung', isCorrect: false },
        {
          text: 'Vena porta menuju hati',
          isCorrect: true,
          explanation: 'Glukosa dan asam amino diserap kapiler darah vili dan terkumpul di vena porta hepatika yang membawa darah kaya nutrisi langsung ke hati untuk diproses, disimpan, atau didistribusikan ke seluruh tubuh',
        },
        { text: 'Pembuluh limfa', isCorrect: false },
        { text: 'Ginjal untuk disaring', isCorrect: false },
      ],
    },
    {
      questionText: 'Total luas permukaan usus halus dengan adanya vili dan mikrovili mencapai sekitar...',
      category: 'penyerapan',
      objective: 5,
      options: [
        { text: '10 m²', isCorrect: false },
        { text: '50 m²', isCorrect: false },
        {
          text: '200 m²',
          isCorrect: true,
          explanation: 'Kombinasi lipatan dinding usus, vili (tonjolan makroskopik), dan mikrovili (brush border, tonjolan mikroskopik) meningkatkan luas permukaan usus halus dari sekitar 0,05 m² menjadi 200 m², sangat meningkatkan efisiensi penyerapan',
        },
        { text: '500 m²', isCorrect: false },
      ],
    },
  ];

  for (const q of questionsData) {
    await prisma.question.create({
      data: {
        questionText: q.questionText,
        category: q.category,
        objective: q.objective,
        options: {
          create: q.options,
        },
      },
    });
  }

  console.log('✅ Database berhasil di-seed dengan 25 soal!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
