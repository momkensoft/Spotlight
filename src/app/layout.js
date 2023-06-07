import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotlight',
  description: 'Personal website template.',
}

export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en" dir='ltr' className='h-full antialiased js-focus-visible dark' >
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black" >
        <div>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative ">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
       
      </body>
    </html>
  )
}
