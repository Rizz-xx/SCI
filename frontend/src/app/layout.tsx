import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sistem Cerna Interaktif — Media Pembelajaran Biologi Kelas XI SMA',
  description:
    'Media pembelajaran interaktif sistem pencernaan manusia untuk siswa kelas XI SMA. Pelajari organ pencernaan, proses pencernaan, enzim, dan penyerapan zat makanan melalui animasi dan simulasi laboratorium virtual.',
  keywords: ['sistem pencernaan', 'biologi SMA', 'media pembelajaran interaktif', 'organ pencernaan', 'enzim pencernaan'],
  authors: [{ name: 'Sistem Cerna Interaktif' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#059669',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
