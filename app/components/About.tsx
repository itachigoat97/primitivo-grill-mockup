interface AboutProps {
  label: string
  title: string
  text1: string
  text2: string
  googleRating: string
  googleReviews: string
  tripadvisorRating: string
  tripadvisorReviews: string
  quote: string
  quoteCite: string
}

function renderTextWithEmphasis(text: string) {
  const parts = text.split(/\*(.*?)\*/)
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : part
  )
}

export default function About({
  label, title, text1, text2,
  googleRating, googleReviews,
  tripadvisorRating, tripadvisorReviews,
  quote, quoteCite,
}: AboutProps) {
  return (
    <section className="section about" id="about">
      <div className="section-label reveal">{label}</div>
      <h2
        className="section-title reveal reveal-delay-1"
        dangerouslySetInnerHTML={{ __html: title.replace('\n', '<br>') }}
      />
      <p className="about-text reveal reveal-delay-2">
        {renderTextWithEmphasis(text1)}
      </p>
      <p className="about-text reveal reveal-delay-3" style={{ marginTop: '1.2rem' }}>
        {renderTextWithEmphasis(text2)}
      </p>

      <div className="about-stats reveal reveal-delay-4">
        <div className="about-stat">
          <div className="about-stat-num">{googleRating}★</div>
          <div className="about-stat-label">Google · {googleReviews} reviews</div>
        </div>
        <div className="about-stat">
          <div className="about-stat-num">{tripadvisorRating}★</div>
          <div className="about-stat-label">TripAdvisor · {tripadvisorReviews} reviews</div>
        </div>
      </div>

      <div className="about-quote reveal reveal-delay-5">
        <p>&ldquo;{quote}&rdquo;</p>
        <cite>— {quoteCite}</cite>
      </div>
    </section>
  )
}
