import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DreamSeller - Building Innovative Products & AI Services for the Future',
  description: 'AI startup building cutting-edge tools and providing automation services. Discover our products: SpeakVerse, MedEasy, and EasyDelivery.',
  keywords: 'AI, automation, mobile apps, web development, custom GPT, LLM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}