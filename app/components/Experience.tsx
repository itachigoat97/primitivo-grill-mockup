interface ExperienceCardData {
  _id: string
  title: string
  description: string
  iconSvg: string
  order: number
}

interface ExperienceProps {
  cards: ExperienceCardData[]
}

export default function Experience({ cards }: ExperienceProps) {
  return (
    <section className="section experience" id="experience">
      <div className="section-label reveal">The Experience</div>
      <h2 className="section-title reveal reveal-delay-1">
        More Than<br />a Meal
      </h2>

      <div className="experience-grid">
        {cards.map((card, i) => (
          <div key={card._id} className={`exp-card reveal reveal-delay-${i + 2}`}>
            <div className="exp-card-icon">
              <svg viewBox="0 0 48 48" dangerouslySetInnerHTML={{ __html: card.iconSvg }} />
            </div>
            <h3 className="exp-card-title">{card.title}</h3>
            <p className="exp-card-text">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
