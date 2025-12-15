'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Services from '@/components/Services'
import HowWeWork from '@/components/HowWeWork'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen" id="main-content">
        <Hero />
        <About />
        <Products />
        <Services />
        <HowWeWork />
        <TechStack />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  )
}