import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mario Carande Scarafia',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </header>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
