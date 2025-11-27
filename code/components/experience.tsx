'use client'

import { useEffect, useState } from 'react'

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'NP Technology',
      duration: 'June 2024 - May 2025',
      description: 'Built and optimized APIs for the company\'s internal task management system. Focused on database query optimization and improving system performance.',
      highlights: ['.NET', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'Swagger'],
      responsibility: 'API development, database optimization, and performance tuning',
    },
    {
      title: 'Book Store Project',
      company: 'Personal Project',
      duration: 'September 2023 - December 2023',
      description: 'Designed and developed the complete backend for an e-commerce book store platform. Implemented secure authentication and payment processing.',
      highlights: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST API'],
      responsibility: 'Full backend development and system architecture',
      github: 'https://github.com/vietha37/Book-store.git',
    },
    {
      title: 'Music Web Project',
      company: 'Personal Project',
      duration: 'December 2023 - March 2024',
      description: 'Conceptualized and built API endpoints for a music streaming platform. Implemented efficient database schemas for handling music metadata and user interactions.',
      highlights: ['Node.js', 'JavaScript', 'MongoDB', 'REST API', 'Express.js'],
      responsibility: 'API design and backend implementation',
      github: 'https://github.com/vietha37/graceful.git',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const index = parseInt(element.dataset.index || '0')
          setVisibleItems((prev) => new Set(prev).add(index))
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.experience-item').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 slide-in-left">Work Experience & Projects</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className={`experience-item border-l-4 border-primary pl-8 pb-8 relative ${visibleItems.has(index) ? 'fade-in-up' : 'reveal-on-scroll'}`}
              style={{ animationDelay: visibleItems.has(index) ? `${index * 0.15}s` : '0s' }}
            >
              <div className="absolute -left-3 top-1 w-5 h-5 bg-primary rounded-full border-4 border-background" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.duration}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.responsibility}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/15 text-accent rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {exp.github && (
                  <div className="pt-2">
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      View on GitHub →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
