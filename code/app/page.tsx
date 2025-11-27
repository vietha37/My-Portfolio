'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero setActiveSection={setActiveSection} />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        
        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
