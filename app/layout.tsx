import './globals.css'
import { Nunito } from 'next/font/google'
import { Header } from '@/components/header/Header'

export const metadata = {
  title: 'Rest Countries',
  description: 'Generated by create next app',
}

const nunito = Nunito({
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.className}`}>
      <body className={'bg-primary dark:bg-primary-dark'}>
        <Header />
        {children}
      </body>
    </html>
  )
}
