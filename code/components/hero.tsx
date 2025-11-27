'use client'

import { useEffect, useRef } from 'react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add('float-animation')
    }
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2 slide-in-left">
              <p className="text-primary font-semibold">Welcome to my portfolio</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-pretty">
                Hi, I'm Dang Van Viet
              </h1>
              <p className="text-2xl text-accent font-semibold">Backend Developer</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
              Building scalable APIs and robust backend systems with expertise in .NET, Java, and Node.js. Passionate about optimizing database performance, designing clean architectures, and writing maintainable code.
            </p>

            <div className="flex gap-4 pt-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => setActiveSection('contact')}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className="px-6 py-3 border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors"
              >
                Learn More
              </button>
            </div>

            <div className="pt-4 space-y-2 text-sm text-muted-foreground fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p>📧 vietdang61022@gmail.com</p>
              <p>📞 0343205870</p>
              <p>📍 District 11, Ho Chi Minh City</p>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div 
              ref={imageRef}
              className="relative w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-primary/30 shadow-lg overflow-hidden"
            >
              <img 
                src="/avatar.jpg" 
                alt="Dang Van Viet" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
