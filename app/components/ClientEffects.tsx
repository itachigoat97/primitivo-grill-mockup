'use client'

import { useEffect, useState } from 'react'

export default function ClientEffects() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Page loader
    const timer = setTimeout(() => setLoaded(true), 600)

    // Nav scroll effect
    const nav = document.getElementById('nav')
    const handleScroll = () => {
      if (!nav) return
      if (window.scrollY > 60) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Ember particles
    const field = document.getElementById('emberField')
    if (field) {
      const count = window.innerWidth < 640 ? 12 : 20
      for (let i = 0; i < count; i++) {
        const ember = document.createElement('div')
        ember.classList.add('ember')
        ember.style.left = Math.random() * 100 + '%'
        ember.style.bottom = '-10px'
        const size = (1 + Math.random() * 3) + 'px'
        ember.style.width = size
        ember.style.height = size
        ember.style.animationDuration = (4 + Math.random() * 8) + 's'
        ember.style.animationDelay = (Math.random() * 6) + 's'
        ember.style.opacity = '0'
        field.appendChild(ember)
      }
    }

    // Scroll reveal with IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    revealElements.forEach((el) => revealObserver.observe(el))

    // Parallax on hero
    let ticking = false
    const handleParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY
          const hero = document.querySelector('.hero-content') as HTMLElement
          if (hero && y < window.innerHeight) {
            hero.style.transform = `translateY(${y * 0.15}px)`
            hero.style.opacity = String(1 - (y / window.innerHeight) * 0.6)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleParallax, { passive: true })

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    const handleAnchorClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href')!)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    anchors.forEach((a) => a.addEventListener('click', handleAnchorClick as EventListener))

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleParallax)
      revealObserver.disconnect()
      anchors.forEach((a) => a.removeEventListener('click', handleAnchorClick as EventListener))
    }
  }, [])

  return (
    <div className={`page-loader ${loaded ? 'loaded' : ''}`} id="pageLoader">
      <div className="loader-text">Primitivo</div>
    </div>
  )
}
