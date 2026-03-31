interface HeroProps {
  tagline: string
  title1: string
  title2: string
  subtitle: string
  reservationUrl: string
}

export default function Hero({ tagline, title1, title2, subtitle, reservationUrl }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="ember-field" id="emberField" />
      <div className="hero-content">
        <p className="hero-tagline">{tagline}</p>
        <h1 className="hero-title">
          <span className="hero-title-line">{title1}</span>
          <span className="hero-title-line">{title2}</span>
        </h1>
        <p className="hero-sub">{subtitle}</p>
        <a href={reservationUrl} target="_blank" rel="noopener" className="hero-cta">
          <span>Reserve Your Table</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
