import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Epam Store E-commerce',
  description: 'An e-commerce site built with Next.js and Fake Store API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Epam Store</h1>
            <div className="space-x-4">
              <Link href="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign Up</Link>
              <Link href="/login" className="text-sm font-medium bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">Login</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}

