'use client'

import { useState } from 'react'
import { Mail, Github, Phone, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:vietdang61022@gmail.com',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vietha37',
      color: 'from-slate-600 to-slate-800'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:0343205870',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vietdang',
      color: 'from-blue-500 to-blue-700'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in discussing backend architecture, API design, or backend projects? Feel free to reach out. I'm always open to interesting opportunities and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                  className="group relative overflow-hidden rounded-lg p-6 text-center transition-all hover:shadow-lg hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/20 rounded-full group-hover:bg-white/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-white transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors mt-1">
                        {link.label === 'Email' && 'vietdang61022@gmail.com'}
                        {link.label === 'GitHub' && 'github.com/vietha37'}
                        {link.label === 'Phone' && '0343205870'}
                        {link.label === 'LinkedIn' && 'Connect with me'}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
