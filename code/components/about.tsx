'use client'

import { useEffect, useState } from 'react'

export default function About() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'C#', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks & Knowledge',
      skills: ['ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'Spring Boot', 'Node.js'],
    },
    {
      category: 'Databases',
      skills: ['SQL', 'MySQL', 'MongoDB', 'SQL Server'],
    },
    {
      category: 'Tools & Concepts',
      skills: ['Git', 'Postman', 'Swagger', 'REST API', 'OOP', 'Design Pattern'],
    },
  ]

  const education = [
    {
      school: 'Ton Duc Thang University',
      degree: 'Bachelor of Science in Computer Science',
      year: '2020 - 2024',
      courses: ['OOP', 'Data Structure & Algorithm', 'Web Development', 'Database Management', 'Design Pattern'],
    },
    {
      school: 'Certifications',
      degree: 'Aptis ESOL Certificate (Level B2) & Agile Development / Scrum Framework',
      year: '2023 - 2024',
      courses: ['Scrum Framework', 'Agile Development'],
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

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="scroll-reveal" data-index="0">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${visibleItems.has(0) ? 'fade-in-up' : 'reveal-on-scroll'}`}>About Me</h2>
            <p className={`text-lg text-muted-foreground max-w-3xl leading-relaxed ${visibleItems.has(0) ? 'fade-in-up' : 'reveal-on-scroll'}`} style={{ animationDelay: visibleItems.has(0) ? '0.1s' : '0s' }}>
              As a Backend Developer specializing in C#/.NET, I have working experience in a corporate environment, building APIs and working with SQL Server. I enjoy solving problems, quickly learning new technologies, and improving code quality every day. I am looking to join a professional development team to further enhance my skills and contribute to meaningful products.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`scroll-reveal p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all ${visibleItems.has(index) ? 'fade-in-up' : 'reveal-on-scroll'}`}
                  style={{ animationDelay: visibleItems.has(index) ? `${index * 0.1}s` : '0s' }}
                >
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  data-index={index + 10}
                  className={`scroll-reveal p-6 bg-card rounded-lg border border-border ${visibleItems.has(index + 10) ? 'fade-in-up' : 'reveal-on-scroll'}`}
                  style={{ animationDelay: visibleItems.has(index + 10) ? `${index * 0.1}s` : '0s' }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">
                      {edu.year}
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {edu.school === 'Ton Duc Thang University' ? 'Relevant Coursework' : 'Achievements'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
