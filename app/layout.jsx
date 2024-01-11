import { Rubik } from 'next/font/google'
import './globals.css'

//components
import Navbar from '/components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-black text-offwhite`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
