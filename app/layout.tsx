import Navbar from '@/components/layouts/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/layouts/Footer'

const popinsPoppins = Poppins({ subsets: ['latin'], weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Keamanan Informasi | Zidan Fatoni',
  description: 'Lindungilah data anda menggunakan algoritma RC4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={popinsPoppins.className}>
        <div className="overflow-hidden">
              <Navbar/>
                {children}
              <Footer/>
        </div>
      </body>
    </html>
  )
}
